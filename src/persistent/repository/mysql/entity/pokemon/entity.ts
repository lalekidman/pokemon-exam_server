import { IPokemonEntity } from '@app/domain/pokemon/entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne
} from 'typeorm'
import { TrainerRepositoryEntity } from '../trainer';
import { PokemonStatsRepositoryEntity } from '../pokemon-stats'
import { TABLE_NAMES } from '@app/common/constants';

@Entity({name: TABLE_NAMES.POKEMON})
export class PokemonRepositoryEntity implements Omit<IPokemonEntity, '_id'> {

  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({type: "varchar", length: 255})
  name!: string;

  @Column({type: "varchar", length: 255})
  type!: string;

  @OneToOne(() => PokemonStatsRepositoryEntity, (pokemonStats) => pokemonStats.id)
  pokemonStats!: string;

  @ManyToOne(() => TrainerRepositoryEntity, (trainer) => trainer.id)
  trainer!: string;

  @Column({type: "double"})
  createdAt!: number ;

  @Column({type: "double"})
  updatedAt!: number ;
}