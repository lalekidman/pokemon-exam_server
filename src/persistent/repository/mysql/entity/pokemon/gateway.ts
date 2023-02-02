import { TABLE_NAMES } from '@app/common/constants'
import { IRepositoryGatewayQuery } from '@app/common/gateway/repository/repository-gateway.interfaces'
import {
  MySQLRepositoryGatewayService
} from '@app/common/gateway/repository/services/mysql'
import {
  IPokemonRepositoryGateway
} from '@app/domain/pokemon/repository-gateway.interfaces'
import {
  PokemonRepositoryEntity
} from './entity'

export class PokemonRepositoryGateway extends MySQLRepositoryGatewayService<PokemonRepositoryEntity> implements IPokemonRepositoryGateway  {
  constructor () {
    super(PokemonRepositoryEntity, TABLE_NAMES.POKEMON)
  }
  /**
   * by data by id
   * @param id
   */
  public async findOne(
    query: IRepositoryGatewayQuery<PokemonRepositoryEntity>
  ): Promise<PokemonRepositoryEntity|null> {
    console.log('aaaaaaaaaa.generateQuery(query) :>> ', this.generateQuery(query));
    console.log('this.gxxxxenerateQuery(query) :>> ', query);
    return this.repository.createQueryBuilder()
      .select(this.tableName)
      .from(PokemonRepositoryEntity, this.tableName)
      .leftJoinAndSelect("pokemon.pokemonStats", TABLE_NAMES.POKEMON_STATS)
      .where(this.generateQuery(query), query)
      .getOne()
  }
}