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
    protected readonly entity: new () => T,
    protected readonly tableName: string
  ) {
    this.repository = AppDataSource.getRepository(entity)
  }
  protected generateQuery (query: IRepositoryGatewayQuery<T>) {
    return Reflect.ownKeys(query).reduce((previousVal: string, key: any) => {
      if (previousVal !== "") {
        previousVal += " AND "
      }
      return previousVal + `${this.tableName}.${key} = :${key}`
    }, "")
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
    if (query) {
      return this.repository.createQueryBuilder()
        .select(this.tableName)
        .from(this.entity, this.tableName)
        .where(this.generateQuery(query), query)
        .getMany()
    }
    return this.repository.find()
  }
  /**
   * by data by id
   * @param id
   */
  public async findOne(
    query: IRepositoryGatewayQuery<T>
  ) {
    console.log('this.generateQuery(query) :>> ', this.generateQuery(query));
    console.log('this.generateQuery(query) :>> ', query);
    return this.repository.createQueryBuilder()
      .select(this.tableName)
      .from(this.entity, this.tableName)
      .where(this.generateQuery(query), query)
      .getOne()
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
    const cursor = this.repository.createQueryBuilder()
      .select(this.tableName)
      .from(this.entity, this.tableName)
      .where(this.generateQuery(query), query)
    return (await cursor.getMany()).length
  }
}
