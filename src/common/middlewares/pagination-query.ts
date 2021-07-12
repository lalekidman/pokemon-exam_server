
import {Request, Response, NextFunction} from 'express'
import { IPaginationQueryParams } from '../interfaces'

export const transformPaginationListMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const {
    fields = '',
    limit = 10,
    offset = 0,
    search = '',
    sort = ''
  } = req.query as IPaginationQueryParams

  res.locals.queryParams = {
    ...req.query,
    limit: +limit,
    offset: +offset,
    search,
    sort,
    fields,
  }
  next()
}