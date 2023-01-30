import {
  MySQLRepositoryGatewayService
} from '@app/common/gateway/repository/services/mysql'
import {
  ILeagueRepositoryGateway
} from '@app/domain/league/repository-gateway.interfaces'

import {
  LeagueRepositoryEntity
} from './entity'

export class LeagueRepositoryGateway extends MySQLRepositoryGatewayService<LeagueRepositoryEntity> implements ILeagueRepositoryGateway  {
  constructor () {
    super(LeagueRepositoryEntity)
  }

  // public async insertOne(data: LeagueRepositoryEntity): Promise<LeagueRepositoryEntity> {
  //   const league = new LeagueRepositoryEntity()
  //   league.id = data.id
  //   league.title = data.title
  //   league.location = data.location
  //   league.terrain = data.terrain
  //   league.pokemonMaxStats = data.pokemonMaxStats
  //   league.requiredSlotSize = data.requiredSlotSize
  //   league.owner = data.owner
  //   league.author = data.author
  //   league.date = data.date
  //   league.createdAt = data.createdAt
  //   league.updatedAt = data.updatedAt
  //   await this.repository.save(league)
  //   return league
  // }

  // public async updateById(id: string, data: IRepositoryUpdateProperties<LeagueRepositoryEntity>): Promise<LeagueRepositoryEntity | null> {

  //   const league = await this.repository.findOneBy({
  //     id
  //   })
  //   if (league) {
  //     const keys = Reflect.ownKeys(data)
  //     for (const key of keys) {
  //       if (typeof (key) === 'string') {
  //         // @ts-expect-error
  //         data[key] = data[key]
  //       }
  //     }
  //     data.title ? league.title = data.title : null
  //     data.location ? league.location = data.location : null
  //     data.terrain ? league.terrain = data.terrain : null
  //     data.terrain ? league.terrain = data.terrain : null
  //     data.pokemonMaxStats ? league.pokemonMaxStats = data.pokemonMaxStats : null
  //     data.requiredSlotSize ? league.requiredSlotSize = data.requiredSlotSize : null
  //     data.owner ? league.owner = data.owner : null
  //     data.author ? league.author = data.author : null
  //     data.date ? league.date = data.date : null
  //     league.updatedAt = Date.now()
  //     await this.repository.save(league)
  //   }
  //   return league
  // }
  // public async updateOne(query: Partial<LeagueRepositoryEntity>, data: IRepositoryUpdateProperties<LeagueRepositoryEntity>): Promise<LeagueRepositoryEntity | null> {
  //   const trainer = await this.repository.findOneBy(query)
  //   if (trainer) {
  //     data.firstName ? trainer.firstName = data.firstName : null
  //     data.lastName ? trainer.lastName = data.lastName : null
  //     trainer.updatedAt = Date.now()
  //     await TrainerRepository.save(trainer)
  //   }
  //   return trainer
  // }
}