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

export type IRespositoryGatewayQuery<T> = Partial<T>

export interface IGeneralRepositoryGateway<T> {
  list(
    query?: IRespositoryGatewayQuery<T>,
    options?: IListOption<T>,
  ): Promise<T[]>
  insertOne(data: T): Promise<T>
  insertMany(data: T[]): Promise<T[]>
  findById(id: string): Promise<T|null>
  findOne(
    query: IRespositoryGatewayQuery<T>,
    projection?: Partial<Record<keyof T, 1 | 0>>
  ): Promise<T>
  
  updateById(id: string, data: IRepositoryGatewayData<T>): Promise<T|null>
  updateOne(
    query: IRespositoryGatewayQuery<T>,
    data: IRepositoryGatewayData<T>
  ): Promise<T|null>

  removeById(id: string): Promise<T|null>
  removeOne(query: IRespositoryGatewayQuery<T>): Promise<T|null>
  remove(query: IRespositoryGatewayQuery<T>): Promise<boolean|null>
  count(query: IRespositoryGatewayQuery<T>): Promise<number>
  // aggregate(pipeline: Parameters<Model<T>['aggregate']>[0]): Promise<any[]>
}
