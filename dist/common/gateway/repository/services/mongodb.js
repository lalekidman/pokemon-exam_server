"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class MongoRepositoryGatewayService {
    /**
     *
     * @param DB
     */
    constructor(DB) {
        this.collectionModel = DB;
    }
    /**
     * get list
     * @param query
     * @param queryParams
     */
    async list(query, queryParams = {}) {
        const { limit = 10, offset = 0, sort = 'createdAt:asc', search = '', searchFields = [], fields = null } = queryParams;
        const queryOptions = {};
        if (limit >= 1) {
            queryOptions.limit = +limit;
        }
        if (offset >= 0) {
            queryOptions.offset = +offset;
        }
        const matches = searchFields.map((field) => ({ [field]: {
                $regex: new RegExp(search, 'gi')
            } }));
        queryOptions.sort = sort.split(',').reduce((sortFields, field) => {
            const sortValue = field.split(':');
            return Object.assign(Object.assign({}, sortFields), { [sortValue[0]]: sortValue[1] === 'asc' ? 1 : -1 });
        }, {});
        const projections = fields ? fields.split(',').reduce((fields, fieldName) => (Object.assign(Object.assign({}, fields), { [fieldName]: 1 })), {}) : null;
        const documentQuery = this.collectionModel.find({
            $and: [
                query,
                ...(matches.length >= 1 ? [
                    {
                        $or: matches
                    }
                ] : [])
            ]
        }, projections, queryOptions);
        return documentQuery;
    }
    /**
     * by data by id
     * @param id
     */
    async findById(id) {
        try {
            const document = await this.collectionModel
                .findById(id);
            return document;
        }
        catch (error) {
            throw error;
        }
    }
    /**
     * by data by id
     * @param id
     */
    async findOne(query, projection) {
        const document = await this.collectionModel.findOne(query, projection).lean();
        return document;
    }
    /**
     * insert data
     * @param data
     */
    async insertOne(data) {
        const newDocument = await this.initialize(data).save();
        return newDocument.toObject();
    }
    /**
     * insert bulk/mutiple data
     * @param data
     */
    insertMany(data) {
        return Promise.all(data.map(elem => this.insertOne(elem)));
    }
    /**
     * initialize object
     * @param data
     */
    initialize(data) {
        return new this.collectionModel(Object.assign({ _id: (0, uuid_1.v4)(), createdAt: Date.now(), updatedat: 0 }, data));
    }
    /**
     *
     * @param id
     * @param data
     */
    async updateById(id, data) {
        try {
            // @ts-expect-error
            delete data._id;
            // @ts-expect-error
            delete data.id;
            // @ts-expect-error
            delete data.createdAt;
            const document = await this.findById(id);
            if (document) {
                document.set(data);
                document.save();
                return document.toObject();
            }
            return null;
        }
        catch (err) {
            throw err;
        }
    }
    /**
     * update single document
     * @param query
     * @param data
     */
    async updateOne(query, data) {
        const document = await this.collectionModel.findOne(query);
        if (document) {
            document.set(data);
            await document.save();
            return document.toObject();
        }
        return null;
    }
    async removeById(id) {
        const document = await this.findById(id);
        if (document) {
            document.remove();
            return document.toObject();
        }
        return document;
    }
    async removeOne(query) {
        const document = await this.collectionModel.findOne(query);
        if (document) {
            document.remove();
            return document.toObject();
        }
        return null;
    }
    async remove(query) {
        await this.collectionModel.remove(query);
        return true;
    }
    count(query) {
        return this.collectionModel
            .find(query)
            .countDocuments()
            .then(count => {
            return count;
        });
    }
    /**
     *
     * @param pipeline a pipeline query for aggregation on mongodb
     * @param queryParams for filtering, like limitTo, startAt, sortby etc..
     * @param searchFields2 array of fields that needed to be search or to filter,
     * a function that return a pagination data.
     */
    aggregateWithPagination(pipeline, queryParams) {
        let { fields = {}, limit = 0, offset = 0, search = '', searchFields = [], sort = '' } = queryParams || {};
        limit = +limit;
        offset = +offset;
        // let sortTo = { createdAt: -1 } as any
        let sortTo = {};
        if (sort) {
            // proposal multiple sorting fields formating process
            const sortArrayOptions = sort.split(',');
            for (let i = 0; i < sortArrayOptions.length; i++) {
                let sortOption = sortArrayOptions[i].split(':');
                sortTo[sortOption[0]] = sortOption[1] === 'asc' ? 1 : -1;
            }
            // const sortOption = sort.split(':')
            // if (sortOption.length >= 1) {
            //   sortTo = {
            //     [sortOption[0]]: sortOption[1] === 'asc' ? 1 : -1
            //   }
            // }
            // sortTo = Array.isArray(sortBy)
            //   ? sortBy.reduce((obj, s) => {
            //       obj[s.fieldName] = parseInt(s.status)
            //       return obj
            //     }, {})
            //   : { [sortBy.fieldName]: sortBy.status }
        }
        const firstPipeline = [
            {
                $sort: sortTo,
            },
            {
                $skip: offset,
            },
            {
                $limit: limit,
            },
        ];
        // if limitTO is equal to = 0, will remove the $limit on the pipeline
        if (limit === 0) {
            const ind = firstPipeline.findIndex(stage => Object.keys(stage)[0] === '$limit');
            if (ind >= 0) {
                // remove ethe $limit on the pipeline.
                firstPipeline.splice(ind, 1);
            }
        }
        // @ts-expect-error
        const searchFilters = searchFields.map((field) => ({
            [field]: {
                $regex: new RegExp(search, 'gi'),
            },
        }));
        const paginationQuery = pipeline.concat([
            {
                $match: searchFilters.length >= 1 ? {
                    $or: searchFilters,
                } : {},
            },
            {
                $facet: {
                    data: firstPipeline,
                    totalPages: [
                        {
                            $group: {
                                _id: null,
                                counts: {
                                    $sum: 1,
                                },
                            },
                        },
                    ],
                },
            },
            {
                $unwind: {
                    preserveNullAndEmptyArrays: false,
                    path: '$totalPages',
                },
            },
            {
                $project: {
                    _id: 0,
                    data: 1,
                    counts: '$totalPages.counts',
                },
            },
        ]);
        return this.collectionModel
            .aggregate(paginationQuery)
            .then((response) => {
            const paginationResponse = {
                data: [],
                total: 0,
                pages: 0,
            };
            if (response.length >= 1) {
                paginationResponse.data = response[0].data;
                paginationResponse.pages =
                    offset >= 1 ? Math.ceil(response[0].counts / offset) : 1;
                paginationResponse.total = response[0].counts;
            }
            return paginationResponse;
        });
    }
    /**
     *
     * @param pipeline
     * @param paginationQuery
     */
    aggregate(pipeline, paginationQuery) {
        const { limit = 0, offset = 0 } = paginationQuery || {};
        return this.collectionModel.aggregate(pipeline).exec();
    }
}
exports.default = MongoRepositoryGatewayService;
//# sourceMappingURL=mongodb.js.map