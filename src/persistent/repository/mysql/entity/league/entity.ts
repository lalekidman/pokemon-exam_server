import { TABLE_NAMES } from '@app/common/constants';
import { ILeagueEntity } from '@app/domain/league/entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from 'typeorm'
  import { TrainerRepositoryEntity } from '../trainer';

@Entity({name: TABLE_NAMES.LEAGUE})
export class LeagueRepositoryEntity implements Omit<ILeagueEntity, '_id'> { 

  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({type: "double", default: Date.now()})
  date!: number;

  @ManyToOne(() => TrainerRepositoryEntity, (trainer) => trainer.id)
  owner!: string;
  
  @ManyToOne(() => TrainerRepositoryEntity, (trainer) => trainer.id)
  author!: string;

  @Column({type: "varchar", length: 255})
  title!: string;

  @Column({type: "varchar", length: 255})
  location!: string;

  @Column({type: "varchar", length: 255})
  terrain!: string;

  @Column({type: "int"})
  requiredSlotSize!: number ;

  @Column({type: "int"})
  pokemonMaxStats!: number ;
  

  @Column({type: "double"})
  createdAt!: number ;

  @Column({type: "double"})
  updatedAt!: number ;
}