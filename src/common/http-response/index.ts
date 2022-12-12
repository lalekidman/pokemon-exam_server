export * from './error-codes'
export * as ErrorCodes from './error-codes'

import { Response } from 'express';
import {IHttpErrorResponse} from './interfaces'

export class HttpErrorResponse {

  private errors:IHttpErrorResponse[] = []
  constructor(
    private readonly response: Response,
    private readonly status: number
  ) {}

  /**
   * track the errors
   * @param data 
   * @returns 
   */
  public track (data: IHttpErrorResponse) {
    this.errors.push(data)
    return this
  }

  /**
   * throw or return the error.
   */
  public throw () {
    this.response
      .status(this.status)
      .send(ErrorResponse(this.errors))
  }
}

 export const ErrorResponse = (errors: any[]) => {
  // check if the error is have a statusCode.
  // ##DEVNOTE: it means the err is AppError
  return {
    success: false,
    data: null,
    errors
  }
}

 export const SuccessResponse = (data: any) => {
  // check if the error is have a statusCode.
  // ##DEVNOTE: it means the err is AppError
  return {
    success: true,
    data,
    errors: []
  }
}
