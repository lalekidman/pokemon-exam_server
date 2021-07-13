import express, {NextFunction, Request, Response} from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import morgan from 'morgan'
import compressor from 'compression'
import helmet from 'helmet'
import cors from 'cors'

import UserRoute from './user/routes'
export class App {
  public app: any
  public io: any
  private DBURI: string
  private port: number = 3000
  constructor() {
    this.app = express()
    if (process.env.PORT) {
      this.port = parseInt(process.env.PORT as string, 2)
    }
    this.DBURI = `${process.env.DB_PREFIX}://${process.env.DB_HOST}/sample_db?authSource=${process.env.DB_AUTH_SOURCE}`
    this.connectDatabase()
    this.loadMiddlewares()
    this.exposeRoutes()
  }

  private currentUserMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
      const currentUser = req.headers.user ? JSON.parse(req.headers.user as any) : {}
      res.locals.user = currentUser
      // @ts-ignore
      // req.user.actionBy = getActionByInfo(req.user)
    } catch (err) {
      console.log('#####No User found.')
      console.log('#####Error: ', err.message)
    }
    next()
  }
  private exposeRoutes(): void {

    this.app.use(this.currentUserMiddleware)
    this.app.use('/', new UserRoute().expose())


  }
  /**
   * connect to the repository/database
   */
  private connectDatabase() {
    mongoose
      .connect(this.DBURI, {
        user: process.env.DB_USER,
        pass: process.env.DB_PWD,
        useNewUrlParser: true,
      })
      .then(() => {
        console.log('Successfully connected to database.')
      })
      .catch(err => {
        console.log('Failed to connect to the database. Error: ', err)
      })
  }
  /**
   * expose the server port.
   */
  public listen(port: number = this.port): void {
    this.app.listen(port, () => {
      console.log(`Listening to port ${port}`)
    })
  }
  /**
   * load middlewares
   */
  private loadMiddlewares() {
    this.app.use(morgan('dev'))
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(compressor())
    this.app.use(helmet())
    this.app.use(cors())
  }
}
