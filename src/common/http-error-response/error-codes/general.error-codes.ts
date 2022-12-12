import {IHttpErrorResponse} from '../interfaces'

export const INVALID_EMAIL_FORMAT:IHttpErrorResponse = {
  code: 10001,
  error: 'INVALID_EMAIL_FORMAT',
  description: 'Invalid email format.',
  details: {}
}
export const INVALID_MOBILE_NUMBER_FORMAT:IHttpErrorResponse = {
  code: 10002,
  error: 'INVALID_MOBILE_NUMBER_FORMAT',
  description: 'Invalid mobile number format. format should be XXXXXXXXXXXX.',
  details: {}
}

export const INVALID_ACCESS_TOKEN_FORMAT:IHttpErrorResponse = {
  code: 10003,
  error: 'INVALID_ACCESS_TOKEN_FORMAT',
  description: 'the format of access token is invalid. please double check your access token.',
  details: {}
}
export const ACCESS_TOKEN_EXPIRED:IHttpErrorResponse = {
  code: 10004,
  error: 'ACCESS_TOKEN_EXPIRED',
  description: 'access token is expired',
  details: {}
}