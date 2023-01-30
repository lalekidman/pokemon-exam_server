import { ILeagueEntity } from '@app/domain/league/entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from 'typeorm'
  import { TrainerRepositoryEntity } from '../trainer';

@Entity({name: "league"})
export class LeagueRepositoryEntity implements Omit<ILeagueEntity, '_id'> { 

  @PrimaryGeneratedColumn("uuid")
  id: string = '';

  @Column({type: "datetime", default: (new Date()).toISOString()})
  date!: Date;

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
  

  @Column({type: "varchar", length: 100})
  createdAt!: number ;

  @Column()
  updatedAt!: number ;
}