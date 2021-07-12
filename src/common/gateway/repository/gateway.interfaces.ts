// interfaces for
export interface IAggregatePagination<T> {
  data: T[]
  pages: number
  total: number
}
export type IAggregatePaginationResponse<T> = IAggregatePagination<T>


export interface IPaginationQueryParams<T> {
  limit?: number
  offset?: number
  sort?: string
  fields?: string
  search?: string
  searchFields?: (keyof T)[]
}
type IRepositoryGatewayData<T> = Omit<Partial<T>, '_id' | 'id' | 'createdAt'>

type IRespositoryGatewayQuery<T> = Partial<Record<keyof T, any>>
export interface IGeneralRepositoryGateway<T> {
  findByProperty(query: IRespositoryGatewayQuery<T>): Promise<T>
  findAll(
    queryParams?: IRespositoryGatewayQuery<T>,
    paginationQuery?: IPaginationQueryParams<T>,
    project?: Partial<Record<keyof T, 1 | 0>>
  ): Promise<T[]>
  insertOne(data: T): Promise<T>
  insertMany(data: T[]): Promise<T[]>
  findById(id: string): Promise<T|null>
  findOne(
    query: Partial<T>,
    projection?: Partial<Record<keyof T, 1 | 0>>
  ): Promise<T>
  updateById(id: string, data: IRepositoryGatewayData<T>): Promise<T|null>
  updateOne(
    query: IRespositoryGatewayQuery<T>,
    data: IRepositoryGatewayData<T>
  ): Promise<T|null>
  // updateMany(
  //   query: IRespositoryGatewayQuery<T>,
  //   data: IRepositoryGatewayData<T>
  // ): Promise<T[]>
  removeById(id: string): Promise<T|null>
  removeOne(query: Partial<T>): Promise<T|null>
  remove(query: Partial<T>): Promise<boolean|null>
  count(query: Partial<T>): Promise<number>
}
export interface IGeneralPaginationListGateway<T> {
  paginationList(
    filterQuery: IPaginationQueryParams<T>
  ): Promise<IAggregatePagination<T>>
}
export interface IGeneralListGateway<T> {
  getList(filterQuery: IPaginationQueryParams<T>): Promise<T[]>
}
