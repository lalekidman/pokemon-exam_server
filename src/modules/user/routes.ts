import {Router} from 'express'
import {
  requestParamsValidatorMiddleware,
  formValidatorMiddleware
} from '../../common/helper';
import {
  UserValidation
} from './middlewares/validators/input'
import AppController from './controller'
// const multiPartMiddleWare = require('connect-multiparty')()
const appController = new AppController()
export default class AppRoute {
  
  private app: Router
  constructor () {
    this.app = Router({
      mergeParams: true
    })
  }
  /**
   * expose the routes
   */
  public expose () {
    this.app.post('/',
      UserValidation.formValidationPipeline,
      formValidatorMiddleware,
      appController.addRoute
    )
    this.app.get('/',
      appController.listRoute
    )
    this.app.get('/:userId',
      appController.detailsRoute
    )
    this.app.patch('/:userId',
      UserValidation.formValidationPipeline,
      formValidatorMiddleware,
      appController.updateRoute
    )
    return this.app
  }
}