export interface IAggregatePagination<T> {
  data: T[]
  pages: number
  total: number
}
export type IAggregatePaginationResponse<T> = IAggregatePagination<T>

export interface IListOption<T> {
  limit?: number
  offset?: number
  sort?: string
  fields?: string|null
  search?: string
  searchFields?: (keyof T)[]
}
type IRepositoryGatewayData<T> = Omit<Partial<T>, '_id' | 'id' | 'createdAt'>

export type IRepositoryProjectionOption<T> = Partial<Record<keyof T, 1 | 0>>
export type IRepositoryGatewayQuery<T> = Partial<T>
export type IRepositoryUpdateProperties<T> = Partial<Omit<T, 'id' | '_id' | 'createdAt'>>
export interface IGeneralRepositoryGateway<T> {
  list(
    query?: IRepositoryGatewayQuery<T>,
    options?: IListOption<T>,
  ): Promise<T[]>
  insertOne(data: T): Promise<T>
  insertMany(data: T[]): Promise<T[]>
  findOne(
    query: IRepositoryGatewayQuery<T>
  ): Promise<T>
  
  updateById(id: string, data: IRepositoryUpdateProperties<T>): Promise<T|null>
  updateOne(
    query: IRepositoryGatewayQuery<T>,
    data: IRepositoryUpdateProperties<T>
  ): Promise<T|null>

  removeById(id: string): Promise<T|null>
  removeOne(query: IRepositoryGatewayQuery<T>): Promise<T|null>
  remove(query: IRepositoryGatewayQuery<T>): Promise<boolean|null>
  count(query: IRepositoryGatewayQuery<T>): Promise<number>
  // aggregate(pipeline: Parameters<Model<T>['aggregate']>[0]): Promise<any[]>
}
