interface IError {
  statusCode: number
  error: string
  source?: string
  errorMessage?: string
}
export type ILocation = `param` | 'body' | 'query'
interface IErrorData {
  msg: IError
  location: ILocation
  param: string
  value: any
}
export class AppError implements IErrorData {
  // public statusCode: number
  // public error: string
  // public source?: string
  // public errorCode?: string
  // public errorMessage?: string

  public msg: any
  public location: ILocation
  public param: string
  public value: any
  constructor(data: IErrorData) {
    this.msg = data.msg
    this.location = data.location
    this.param = data.param
    this.value = data.value
  }
}
