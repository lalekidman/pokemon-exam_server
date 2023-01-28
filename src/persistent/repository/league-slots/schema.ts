// import { COLLECTION_NAMES } from '@app/common/constants'
// import {
//   SchemaTypeOpts,
//   Document,
//   Schema,
//   model
// } from 'mongoose'

// import {
//   ILeagueEntity
// } from '@app/domain/league/entity/interfaces'

// export interface ILeagueCollectionModel extends ILeagueEntity, Document {
//   _id: string
// }

// const CollectionModelSchemaObject:Record<keyof ILeagueEntity, SchemaTypeOpts<any>> = {
//   _id: {
//     type: String,
//     required: true,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Number,
//     defaul: 0
//   },
//   updatedAt: {
//     type: Number,
//     defaul: 0
//   }
// }
// const CollectionModelSchema = new Schema(CollectionModelSchemaObject, {
//   timestamps: {
//     currentTime: Date.now
//   }
// })
// export const LeagueCollectionModel = model<ILeagueCollectionModel>(COLLECTION_NAMES.TRAINER, CollectionModelSchema)
