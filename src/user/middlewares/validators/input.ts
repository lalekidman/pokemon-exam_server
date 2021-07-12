import {body} from 'express-validator'
export const UserValidation = {
  suspendValidationPipeline: [
    body('status')
      .isBoolean()
      .withMessage('must be a boolean. statuss: true|false')
  ],
  formValidationPipeline: [
    body('firstName')
      .isString()
      .withMessage('name field is required. Please try again.'),
    body('lastName')
      .isString()
      .withMessage('shortName field is required. Please try again.'),
  ]
}
