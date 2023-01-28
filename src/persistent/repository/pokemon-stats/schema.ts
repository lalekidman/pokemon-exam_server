import { COLLECTION_NAMES } from '@app/common/constants'
import {
  SchemaTypeOpts,
  Document,
  Schema,
  model
} from 'mongoose'

import {
  IPokemonStatsEntity
} from '@app/domain/pokemon-stats/entity/interfaces'

export interface IPokemonStatsCollectionModel extends IPokemonStatsEntity, Document {
  _id: string
}

const CollectionModelSchemaObject:Record<keyof IPokemonStatsEntity, SchemaTypeOpts<any>> = {
  _id: {
    type: String,
    required: true,
  },
  attack: {
    type: Number,
    required: true,
  },
  defense: {
    type: Number,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  total: {
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
export const PokemonStatsCollectionModel = model<IPokemonStatsCollectionModel>(COLLECTION_NAMES.POKEMON_STATS, CollectionModelSchema)
