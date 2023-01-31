"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLRepositoryGatewayService = void 0;
const data_source_1 = require("@app/data-source");
class MySQLRepositoryGatewayService {
    constructor(entity) {
        this.entity = entity;
        this.repository = data_source_1.AppDataSource.getRepository(entity);
    }
    /**
     * get list
     * @param query
     * @param queryParams
     */
    async list(query, options) {
        const { limit = 10, offset = 0, sort = 'createdAt:asc', search = '', searchFields = [], fields = null } = options || {};
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
        const documentQuery = this.repository.find({
            $and: [
                query,
                ...(matches.length >= 1 ? [
                    {
                        $or: matches
                    }
                ] : [])
            ]
        });
        return documentQuery;
    }
    /**
     * by data by id
     * @param id
     */
    async findOne(query) {
        const document = await this.repository.findOne({
            where: query,
        });
        return document;
    }
    /**
     * insert data
     * @param data
     */
    // public abstract insertOne(data: T): Promise<T>
    async insertOne(data) {
        // const entity = await this.repository.findOneBy(query)
        const newEntity = new this.entity();
        let updated = false;
        const keys = Reflect.ownKeys(data);
        for (const key of keys) {
            if (typeof (key) === 'string') {
                // @ts-expect-error
                newEntity[key] = data[key];
                updated = true;
            }
        }
        await this.repository.save(newEntity);
        return newEntity;
    }
    /**
     * insert bulk/mutiple data
     * @param data
     */
    insertMany(data) {
        return Promise.all(data.map(elem => this.insertOne(elem)));
    }
    // public abstract updateById(id: string, data: IRepositoryUpdateProperties<T>): Promise<T|null>
    // public abstract updateOne(query: IRepositoryGatewayQuery<T>, data: IRepositoryUpdateProperties<T>): Promise<T|null>
    async updateOne(query, data) {
        const entity = await this.repository.findOneBy(query);
        if (entity) {
            let updated = false;
            const keys = Reflect.ownKeys(data);
            for (const key of keys) {
                if (typeof (key) === 'string') {
                    // @ts-expect-error
                    entity[key] = data[key];
                    updated = true;
                }
            }
            if (updated) {
                // @ts-expect-error
                entity.updatedAt = Date.now();
            }
            await this.repository.save(entity);
        }
        return entity;
    }
    async updateById(id, data) {
        const entity = await this.repository.findOneBy({
            id
        });
        if (entity) {
            let updated = false;
            const keys = Reflect.ownKeys(data);
            for (const key of keys) {
                if (typeof (key) === 'string') {
                    // @ts-expect-error
                    entity[key] = data[key];
                    updated = true;
                }
            }
            if (updated) {
                // @ts-expect-error
                entity.updatedAt = Date.now();
            }
            await this.repository.save(entity);
        }
        return entity;
    }
    async removeById(id) {
        const data = await this.repository.findOneBy({
            id
        });
        if (data) {
            const result = await this.repository.remove(data);
            if (result) {
                // added some validatio here.
            }
        }
        return data;
    }
    async removeOne(query) {
        const data = await this.repository.findOneBy(query);
        if (data) {
            const result = await this.repository.remove(data);
            if (result) {
                // added some validatio here.
            }
        }
        return data;
    }
    /**
     *
     * @param query
     * @returns
     */
    async remove(query) {
        const data = await this.repository.findOneBy(query);
        if (data) {
            const result = await this.repository.remove(data);
            if (result) {
                // added some validatio here.
            }
        }
        return !!data;
    }
    /**
     *
     * @param query
     * @returns
     */
    async count(query) {
        const count = await this.repository.count({
            where: query
        });
        return count;
    }
}
exports.MySQLRepositoryGatewayService = MySQLRepositoryGatewayService;
//# sourceMappingURL=mysql.js.map