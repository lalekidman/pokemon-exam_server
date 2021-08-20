// import {
//   Document, Model
// } from '../index'
import { Document, Model } from 'mongoose'
import { v4 as uuid } from 'uuid'
import {
  IAggregatePagination,
  IPaginationQueryParams,
} from './gateway.interfaces'

export default abstract class GeneralGatewayService<T extends Document, K> {
  // db instance
  protected collectionModel: Model<T>
  /**
   *
   * @param DB
   */
  constructor(DB: Model<T>) {
    this.collectionModel = DB
  }
  /**
   * get list
   * @param query 
   * @param queryParams 
   */
  public async list (
    query?: Record<keyof K, any>,
    queryParams: IPaginationQueryParams<K> = {}
  ) {
    const { limit = 10, offset = 0, sort = '', search = '', searchFields = [], fields = null} = queryParams
    const matches = searchFields.map((field) => ({[field]: {
      $regex: new RegExp(search, 'gi')
    }}))
    const sortField = sort.split(':')
    const projections = fields ? fields.split(':').map((f) => ({[f]: 1})) : null
    const documentQuery = this.collectionModel.find({
      $and: [
        query,
        matches
      ]
    } as any,
    projections,
    {
      limit,
      skip: offset,
      sort: sortField.length >= 2 ? {[sortField[0]]: sortField[1]} : {createdAt: 1}
    })
    return documentQuery
  }
  /**
   * by data by id
   * @param id
   */
  public async findById(id: string) {
    try {
      const document = await this.collectionModel
        .findById(id)
      return document
    } catch (error) {
      throw error
    }
  }
  /**
   * by data by id
   * @param id
   */
  public async findOne(
    query: Partial<K>,
    projection?: Partial<Record<keyof K, 0 | 1>>
  ) {
    const document = await this.collectionModel.findOne(query as any, projection).lean()
    return document as T
  }

  /**
   * @param search ex: { branchId: value, name: value }
   */
  public async findByProperty(search: Partial<Record<keyof K, any>>) {
    const query = {} as any

    for (const key in search) {
      if (key === 'branchId') {
        query[key] = search[key]
      } else {
        query[key] = { $regex: new RegExp(search[key], 'gi') }
      }
    }

    try {
      const document = await this.collectionModel.findOne(query)
      if (!document) {
        throw new Error('No document found.')
      }
      return document
    } catch (error) {
      throw error
    }
  }
  /**
   * insert data
   * @param data
   */
  public async insertOne(data: K) {
    const newDocument = await this.initialize(data).save()
    return newDocument.toObject()
  }
  /**
   * insert bulk/mutiple data
   * @param data
   */
  public insertMany(data: K[]) {
    return Promise.all(data.map(elem => this.insertOne(elem)))
  }
  /**
   * initialize object
   * @param data
   */
  public initialize(data: K) {
    return new this.collectionModel({
      _id: uuid(),
      createdAt: Date.now(),
      updatedat: 0,
      ...data,
    })
  }
  /**
   *
   * @param id
   * @param data
   */
  public async updateById(id: string, data: Partial<K>) {
    try {
      // @ts-expect-error
      delete data._id
      // @ts-expect-error
      delete data.id
      // @ts-expect-error
      delete data.createdAt
      const document = await this.findById(id)
      if (document) {
        document.set(data)
        document.save()
        return document.toObject()
      }
      return null
    } catch (err) {
      throw err
    }
  }
  // /**
  //  * update multiple/many documents
  //  * @param query
  //  * @param data
  //  */
  // public updateMany(query: Record<keyof K, any>, data: K) {
  //   return this.collectionModel.updateMany(
  //     query as any,
  //     {
  //       $set: data,
  //     } as any
  //   )
  //   .then((response) => {
  //     return response
  //   })
  // }
  /**
   * update single document
   * @param query
   * @param data
   */
  public async updateOne(
    query: Partial<Record<keyof K, any>>,
    data: Partial<K>
  ): Promise<K|null>{
    try {
      const document = await this.collectionModel.findOne(query as any)
      if (document) {
        document.set(data)
        await document.save()
        // @ts-expect-error
        return document.toObject()
      }
      return document
    } catch (error) {
      throw error
    }
  }
  public async removeById(id: string) {
    const document = await this.findById(id)
    if (document) {
      document.remove()
      return document.toObject()
    }
    return document
  }
  public removeOne(query: Record<keyof K, any>) {
    return this.collectionModel.findOne(query as any).then(document => {
      if (document) {
        document.remove()
      }
      return document ? document.toObject() : null
    })
  }

  public async remove(query: Record<keyof K, any>) {
    await this.collectionModel.remove(query as any)
    return true
  }
  public count(query: Record<keyof K, any>) {
    return this.collectionModel
      .find(query as any)
      .countDocuments()
      .then(count => {
        return count
      })
  }
  /**
   *
   * @param pipeline a pipeline query for aggregation on mongodb
   * @param queryParams for filtering, like limitTo, startAt, sortby etc..
   * @param searchFields2 array of fields that needed to be search or to filter,
   * a function that return a pagination data.
   */
  public aggregateWithPagination (
    pipeline: any[],
    queryParams: IPaginationQueryParams<K>
  ): Promise<IAggregatePagination<K>> {
    let {
      fields = {},
      limit = 0,
      offset = 0,
      search = '',
      searchFields = [],
      sort = ''
    } = queryParams || {}
    limit = +limit
    offset = +offset
    let sortTo = { createdAt: -1 } as any
    if (sort) {
      const sortOption = sort.split(':')
      if (sortOption.length >= 1) {
        sortTo = {
          [sortOption[0]]: sortOption[1] === 'asc' ? 1 : -1
        }
      }
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
    ] as any[]
    // if limitTO is equal to = 0, will remove the $limit on the pipeline
    if (limit === 0) {
      const ind = firstPipeline.findIndex(
        stage => Object.keys(stage)[0] === '$limit'
      )
      if (ind >= 0) {
        // remove ethe $limit on the pipeline.
        firstPipeline.splice(ind, 1)
      }
    }

    // @ts-expect-error
    const searchFilters = searchFields.map((field: string) => ({
        [field]: {
          $regex: new RegExp(search, 'gi'),
        },
      })
    )
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
    ])
    return this.collectionModel
      .aggregate(paginationQuery)
      .then((response: any) => {
        const paginationResponse = {
          data: [],
          total: 0,
          pages: 0,
        }
        if (response.length >= 1) {
          paginationResponse.data = response[0].data
          paginationResponse.pages =
            offset >= 1 ? Math.ceil(response[0].counts / offset) : 1
          paginationResponse.total = response[0].counts
        }
        return paginationResponse
      })
  }
}
