import { COLLECTION_NAMES } from '@app/common/constants'
import {
  SchemaTypeOpts,
  Document,
  Schema,
  model
} from 'mongoose'

import {
  IPokemonEntity
} from '@app/domain/pokemon/entity/interfaces'

export interface IPokemonCollectionModel extends IPokemonEntity, Document {
  _id: string
}

const CollectionModelSchemaObject:Record<keyof IPokemonEntity, SchemaTypeOpts<any>> = {
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
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
export const PokemonCollectionModel = model<IPokemonCollectionModel>(COLLECTION_NAMES.POKEMON, CollectionModelSchema)
