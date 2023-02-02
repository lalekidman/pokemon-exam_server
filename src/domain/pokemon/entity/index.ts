import {v4 as uuid} from 'uuid'
import {
  makePokemonEntity
} from './entity'

export const PokemonEntity = makePokemonEntity({
  // could use another library.
  generateId: uuid
})

export * from './interfaces'