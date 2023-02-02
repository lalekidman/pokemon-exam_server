import {body} from 'express-validator'
export const TrainerValidation = {
  formValidationPipeline: [
    body('firstName')
      .isString()
      .notEmpty()
      .withMessage('firstName field is required. Please try again.'),
    body('lastName')
      .isString()
      .notEmpty()
      .withMessage('lastName field is required. Please try again.'),
  ]
}