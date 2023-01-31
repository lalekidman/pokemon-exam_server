import {
  ObjectLiteral,
  Repository
} from 'typeorm'
import {
  IGeneralRepositoryGateway,
  IListOption,
  IRepositoryUpdateProperties,
  IRepositoryGatewayQuery,
} from '../repository-gateway.interfaces'
import { AppDataSource } from '@app/data-source'

export abstract class MySQLRepositoryGatewayService<T extends ObjectLiteral & {id: string}> implements IGeneralRepositoryGateway<T> {
  protected readonly repository: Repository<T>
  constructor(
    private readonly entity: new () => T
  ) {
    this.repository = AppDataSource.getRepository(entity)
  }
  /**
   * get list
   * @param query 
   * @param queryParams 
   */
  public async list (
    query?: IRepositoryGatewayQuery<T>,
    options?: IListOption<T>
  ) {
    const {
      limit = 10,
      offset = 0,
      sort = 'createdAt:asc',
      search = '',
      searchFields = [],
      fields = null
    } = options || {}

    const queryOptions = {} as any
    if (limit >= 1) {
      queryOptions.limit = +limit
    }
    if (offset >= 0) {
      queryOptions.offset = +offset
    }
    const matches = searchFields.map((field) => ({[field]: {
      $regex: new RegExp(search, 'gi')
    }}))
    
    queryOptions.sort = sort.split(',').reduce((sortFields: any, field) => {
      const sortValue = field.split(':')
      return {
        ...sortFields,
        [sortValue[0]]: sortValue[1] === 'asc' ? 1 : -1
      }
    }, {})
    const projections = fields ? fields.split(',').reduce((fields: any, fieldName) => ({
      ...fields,
      [fieldName]: 1
    }), {}) : null

    const documentQuery = this.repository.find({
      $and: [
        query,
        ...(matches.length >= 1 ? [
          {
            $or: matches
          }
        ] : [])
      ]
    } as any
    )
    return documentQuery as unknown as T[]
  }
  /**
   * by data by id
   * @param id
   */
  public async findOne(
    query: IRepositoryGatewayQuery<T>
  ) {
    const document = await this.repository.findOne({
      where: query,
    })
    return document as T
  }

  /**
   * insert data
   * @param data
   */
  // public abstract insertOne(data: T): Promise<T>
  public async insertOne(data: IRepositoryUpdateProperties<T>): Promise<T> {
    // const entity = await this.repository.findOneBy(query)
    const newEntity = new this.entity()
    let updated = false
    const keys = Reflect.ownKeys(data)
    for (const key of keys) {
      if (typeof (key) === 'string') {
        // @ts-expect-error
        newEntity[key] = data[key]
        updated = true
      }
    }
    await this.repository.save(newEntity)
    return newEntity
  }
  /**
   * insert bulk/mutiple data
   * @param data
   */
  public insertMany(data: T[]) {
    return Promise.all(data.map(elem => this.insertOne(elem)))
  }

  // public abstract updateById(id: string, data: IRepositoryUpdateProperties<T>): Promise<T|null>
  // public abstract updateOne(query: IRepositoryGatewayQuery<T>, data: IRepositoryUpdateProperties<T>): Promise<T|null>

  public async updateOne(query: IRepositoryGatewayQuery<T>, data: IRepositoryUpdateProperties<T>): Promise<T | null> {
    const entity = await this.repository.findOneBy(query)
    if (entity) {
      let updated = false
      const keys = Reflect.ownKeys(data)
      for (const key of keys) {
        if (typeof (key) === 'string') {
          // @ts-expect-error
          entity[key] = data[key]
          updated = true
        }
      }
      if (updated) {
        // @ts-expect-error
        entity.updatedAt = Date.now()
      }
      await this.repository.save(entity)
    }
    return entity
  }
  public async updateById(id: string, data: IRepositoryUpdateProperties<T>): Promise<T | null> {
    const entity = await this.repository.findOneBy({
      id
    } as any)
    if (entity) {
      let updated = false
      const keys = Reflect.ownKeys(data)
      for (const key of keys) {
        if (typeof (key) === 'string') {
          // @ts-expect-error
          entity[key] = data[key]
          updated = true
        }
      }
      if (updated) {
        // @ts-expect-error
        entity.updatedAt = Date.now()
      }
      await this.repository.save(entity)
    }
    return entity
  }

  public async removeById(id: string) {
    const data = await this.repository.findOneBy({
      id
    } as any)
    if (data) {
      const result = await this.repository.remove(data)
      if (result) {
        // added some validatio here.
      }
    }
    return data
  }

  public async removeOne(query: IRepositoryGatewayQuery<T>) {
    const data = await this.repository.findOneBy(query)
    if (data) {
      const result = await this.repository.remove(data)
      if (result) {
        // added some validatio here.
      }
    }
    return data
  }
  /**
   * 
   * @param query 
   * @returns 
   */
  public async remove(query: IRepositoryGatewayQuery<T>) {
    const data = await this.repository.findOneBy(query)
    if (data) {
      const result = await this.repository.remove(data)
      if (result) {
        // added some validatio here.
      }
    }
    return !!data
  }
  /**
   * 
   * @param query 
   * @returns 
   */
  public async count(query: IRepositoryGatewayQuery<T>) {
    const count = await this.repository.count({
      where: query
    })
    return count
  }
}