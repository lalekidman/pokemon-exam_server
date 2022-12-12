export * from './error-codes'
export * as ErrorCodes from './error-codes'

import {IHttpErrorResponse} from './interfaces'

export class HttpErrorResponse implements IHttpErrorResponse {
  public readonly code: number;
  public readonly description: string;
  public readonly error: string;
  public readonly details?: any;

  constructor(data: IHttpErrorResponse) {
    this.code = data.code
    this.error = data.error
    this.description = data.description
    this.description = data.description
  }
}
