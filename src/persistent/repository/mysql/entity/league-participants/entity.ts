import { TABLE_NAMES } from '@app/common/constants';
import { ILeagueParticipantEntity } from '@app/domain/league-participants/entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from 'typeorm'

import { LeagueSlotRepositoryEntity } from '../league-slots';
import { LeagueRepositoryEntity } from '../league/entity';
import { PokemonRepositoryEntity } from '../pokemon';
import { TrainerRepositoryEntity } from '../trainer';

@Entity({name: TABLE_NAMES.LEAGUE_PARTICIPANT})
export class LeagueParticipantsRepositoryEntity implements Omit<ILeagueParticipantEntity, '_id'> {

  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({type: "varchar", length: 255})
  type!: string;

  @ManyToOne(() => PokemonRepositoryEntity, (pokemon) => pokemon.id)
  pokemon!: string;

  @ManyToOne(() => TrainerRepositoryEntity, (trainer) => trainer.id)
  trainer!: string;

  @ManyToOne(() => LeagueRepositoryEntity, (league) => league.id)
  league!: string;

  @ManyToOne(() => LeagueSlotRepositoryEntity, (leagueSlot) => leagueSlot.id)
  leagueSlot!: string; 

  @Column({type: "double"})
  createdAt!: number ;

  @Column({type: "double"})
  updatedAt!: number ;
}