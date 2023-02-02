
// import {
//   LeagueSlotsEntity,
//   ILeagueSlotInput
// } from '../entity'

// import {
//   ILeagueSlotUsecaseDependencies
// } from './interfaces'

// interface ILeagueSlotCreateUsecaseDependencies extends ILeagueSlotUsecaseDependencies {
//   validateMaximumSlotLimit: (league: string, slotSize: number) => Promise<boolean>
// }
// export const makeLeagueSlotCreateUsecase = (
//   {
//     repositoryGateway,
//     validateMaximumSlotLimit
//   }: ILeagueSlotCreateUsecaseDependencies
// ) => {
//   return class LeagueSlotCreateUsecase {
//     constructor() {}
    
//     /**
//      * to create league slots
//      * @param dataInput 
//      * @returns 
//      */
//     public async updateOne (
//       id: string,
//       dataInput: ILeagueSlotInput,
//     ) {
  
//       // could add limit here?
//       const leagueSlotEntity = new LeagueSlotsEntity(dataInput)
//       const leagueSlot = await repositoryGateway.findOne({
//         _id: id
//       })
//       if (leagueSlot) {

//       }
//       const result = await validateMaximumSlotLimit(leagueSlotEntity.league, size)
//       if (!result) {
//         // throw error here that already reached the limit.
//         throw new Error("reached the maximum slot limit.")
//       }
//       // else create new league slot.
//       // const leagueSlot = await repositoryGateway.insertOne(leagueSlotEntity.toObject())
  
//       return leagueSlot
//     }
//   }
// }
