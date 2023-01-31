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

@Entity({name: "league_participants"})
export class LeagueParticipantsRepositoryEntity implements Omit<ILeagueParticipantEntity, '_id'> {
 

  @PrimaryGeneratedColumn("uuid")
  id: string = '';

  @ManyToOne(() => PokemonRepositoryEntity, (pokemon) => pokemon.id)
  pokemon!: string;

  @ManyToOne(() => TrainerRepositoryEntity, (trainer) => trainer.id)
  trainerId!: string;

  @ManyToOne(() => LeagueRepositoryEntity, (league) => league.id)
  league!: string;

  @ManyToOne(() => LeagueSlotRepositoryEntity, (leagueSlot) => leagueSlot.id)
  leagueSlot!: string; 

  @Column({type: "double"})
  createdAt!: number ;

  @Column({type: "double"})
  updatedAt!: number ;
}