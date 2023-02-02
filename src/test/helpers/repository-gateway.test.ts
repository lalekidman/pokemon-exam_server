import { IGeneralRepositoryGateway, IListOption } from "@app/common/gateway/repository/repository-gateway.interfaces";

export class TestRepositoryGateway implements IGeneralRepositoryGateway<any> {
  private data:any[] = []
  public async list (query?: Partial<any> | undefined, options?: IListOption<any> | undefined): Promise<any[]> {
    return this.data
  }
  public async insertOne(data: any): Promise<any> {
    this.data.push(data)
    return data
  }
  public async insertMany(data: any[]): Promise<any[]> {
    this.data = [
      ...this.data,
      ...data
    ]
    return data
  }
  public async findOne(query: Partial<any>): Promise<any> {
    throw new Error("Method not implemented.");
  }
  public async updateById(id: string, data: Partial<Omit<any, "id" | "createdAt" | "_id">>): Promise<any> {
    throw new Error("Method not implemented.");
  }
  public async updateOne(query: Partial<any>, data: Partial<Omit<any, "id" | "createdAt" | "_id">>): Promise<any> {
    throw new Error("Method not implemented.");
  }
  public async removeById(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  public async removeOne(query: Partial<any>): Promise<any> {
    throw new Error("Method not implemented.");
  }
  public async remove(query: Partial<any>): Promise<boolean | null> {
    throw new Error("Method not implemented.");
  }
  public async count(query: Partial<any>): Promise<number> {
    throw new Error("Method not implemented.");
  }
}