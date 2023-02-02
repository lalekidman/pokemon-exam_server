import {body} from 'express-validator'
export const PokemonValidation = {
  formValidationPipeline: [
    body('name')
      .isString()
      .notEmpty()
      .withMessage('name field is required. Please try again.'),
    body('type')
      .isString()
      .notEmpty()
      .withMessage('type field is required. Please try again.'),
    body('stats.speed')
      .isNumeric()
      .withMessage('stats.speed field must be numeric. Please try again.'),
    body('stats.attack')
      .isNumeric()
      .withMessage('stats.speed field must be numeric. Please try again.'),
    body('stats.defense')
      .isNumeric()
      .withMessage('stats.speed field must be numeric. Please try again.'),
  ]
}