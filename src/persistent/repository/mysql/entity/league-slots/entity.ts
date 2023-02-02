import { TABLE_NAMES } from '@app/common/constants';
import { ILeagueSlotEntity } from '@app/domain/league-slots/entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from 'typeorm'
import { LeagueRepositoryEntity } from '../league/entity';

@Entity({name: TABLE_NAMES.LEAGUE_SLOT})
export class LeagueSlotRepositoryEntity implements Omit<ILeagueSlotEntity, '_id'> {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => LeagueRepositoryEntity, (league) => league.id)
  league!: string;
  
  @Column({type: "float"})
  totalAttack!: number;

  @Column({type: "float"})
  totalDefense!: number;

  @Column({type: "float"})
  totalSpeed!: number;

  @Column({type: "float"})
  overallTotal!: number; 

  @Column({type: "double"})
  createdAt!: number ;

  @Column({type: "double"})
  updatedAt!: number ;
}