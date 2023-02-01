import { TABLE_NAMES } from '@app/common/constants';
import { IPokemonStatsEntity } from '@app/domain/pokemon-stats/entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from 'typeorm'

@Entity({name: TABLE_NAMES.POKEMON_STATS})
export class PokemonStatsRepositoryEntity implements Omit<IPokemonStatsEntity, '_id'> {

  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({type: "float"})
  attack!: number;

  @Column({type: "float"})
  defense!: number;

  @Column({type: "float"})
  speed!: number;

  @Column({type: "float"})
  total!: number;

  @Column({type: "double"})
  createdAt!: number ;

  @Column({type: "double"})
  updatedAt!: number ;
}