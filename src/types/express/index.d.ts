import {Request} from 'express'

interface IRequestFingerprint {
  hash: string
}

declare module "express" {
  interface Request extends Request {
    user?: T;
    fingerprint?: IRequestFingerprint
  }
}
