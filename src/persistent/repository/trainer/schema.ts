import { COLLECTION_NAMES } from '@app/common/constants'
import {
  SchemaTypeOpts,
  Document,
  Schema,
  model
} from 'mongoose'

import {
  ITrainerEntity
} from '@app/domain/trainer'

export interface ITrainerCollectionModel extends ITrainerEntity, Document {
  _id: string
}

const CollectionModelSchemaObject:Record<keyof ITrainerEntity, SchemaTypeOpts<any>> = {
  _id: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  suspended: {
    type: Boolean,
    default: false
  },
  suspendedAt: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Number,
    defaul: 0
  },
  updatedAt: {
    type: Number,
    defaul: 0
  }
}
const CollectionModelSchema = new Schema(CollectionModelSchemaObject, {
  timestamps: {
    currentTime: Date.now
  }
})
export const TrainerCollectionModel = model<ITrainerCollectionModel>(COLLECTION_NAMES.TRAINER, CollectionModelSchema)
