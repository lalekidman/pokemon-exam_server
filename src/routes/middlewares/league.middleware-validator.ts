import {body} from 'express-validator'
export const LeagueValidation = {
  formValidationPipeline: [
    body('title')
      .isString()
      .notEmpty()
      .withMessage('title field is required. Please try again.'),
    body('terrain')
      .isString()
      .notEmpty()
      .withMessage('terrain field is required. Please try again.'),
    body('location')
      .isString()
      .notEmpty()
      .withMessage('location field is required. Please try again.'),
    body('pokemonMaxStats')
      .isNumeric()
      .withMessage('pokemonMaxStats field must be numeric. Please try again.')
      .isFloat({min: 0.1, max: 50})
      .withMessage('pokemonMaxStats must be greater than 0.1 and less than 50.'),
    body('requiredSlotSize')
      .isNumeric()
      .withMessage('requiredSlotSize field must be numeric. Please try again.')
      .bail()
      .isInt({min: 1, max: 10})
      .withMessage('requiredSlotSize must be greater than 1 and less than 10.'),
  ]
}