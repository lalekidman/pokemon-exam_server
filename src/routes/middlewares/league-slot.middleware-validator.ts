import {body} from 'express-validator'

const participantTypes = ["solo", "pair"]
export const LeagueSlotValidation = {
  formValidationPipeline: [
    body('type')
      .isString()
      .notEmpty()
      .withMessage('type field is required. Please try again.')
      .bail()
      .isIn(participantTypes)
      .withMessage(`invalid value. allowed values are \"${participantTypes.join("\", \"")}\".`)
      ,
    body('participants[*].trainer')
      .isString()
      .withMessage('must be a string value.')
      .bail()
      .isUUID(4)
      .withMessage('must be in uuid v4 format.'),
    body('participants[*].pokemon')
      .isString()
      .withMessage('must be a string value.')
      .bail()
      .isUUID(4)
      .withMessage('must be in uuid v4 format.'),
  ]
}