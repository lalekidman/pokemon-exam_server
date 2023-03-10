import { TABLE_NAMES } from '@app/common/constants'
import {
  MySQLRepositoryGatewayService
} from '@app/common/gateway/repository/services/mysql'
import {
  ITrainerRepositoryGateway
} from '@app/domain/trainer/repository-gateway.interfaces'
import {
  TrainerRepositoryEntity
} from './entity'

export class TrainerRepositoryGateway extends MySQLRepositoryGatewayService<TrainerRepositoryEntity> implements ITrainerRepositoryGateway  {
  constructor () {
    super(TrainerRepositoryEntity, TABLE_NAMES.TRAINER)
  }
  // public async insertOne(data: Trainer): Promise<Trainer> {
  //   const trainer = new Trainer()
  //   trainer.firstName = data.firstName
  //   trainer.lastName = data.lastName
  //   trainer.createdAt = data.createdAt
  //   trainer.updatedAt = data.updatedAt
  //   await TrainerRepository.save(trainer)
  //   return trainer
  // }
  // public async updateById(id: string, data: Partial<Omit<Trainer, 'id' | '_id'>>): Promise<Trainer | null> {

  //   const trainer = await TrainerRepository.findOneBy({
  //     id
  //   })
  //   if (trainer) {
  //     data.firstName ? trainer.firstName = data.firstName : null
  //     data.lastName ? trainer.lastName = data.lastName : null
  //     trainer.updatedAt = Date.now()
  //     await TrainerRepository.save(trainer)
  //   }
  //   return trainer
  // }
  // public async updateOne(query: Partial<Trainer>, data: Partial<Omit<Trainer, 'id' | '_id'>>): Promise<Trainer | null> {
  //   const trainer = await TrainerRepository.findOneBy(query)
  //   if (trainer) {
  //     data.firstName ? trainer.firstName = data.firstName : null
  //     data.lastName ? trainer.lastName = data.lastName : null
  //     trainer.updatedAt = Date.now()
  //     await TrainerRepository.save(trainer)
  //   }
  //   return trainer
  // }
}