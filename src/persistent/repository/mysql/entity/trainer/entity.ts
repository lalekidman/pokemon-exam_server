import { ITrainerEntity } from '@app/domain/trainer/entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from 'typeorm'

@Entity({name: "trainers"})
export class TrainerRepositoryEntity implements Omit<ITrainerEntity, '_id'> {

  @PrimaryGeneratedColumn("uuid")
  id: string = '';

  @Column()
  firstName: string = '';

  @Column()
  lastName: string  = '';

  @Column()
  suspended: boolean = false;

  @Column()
  suspendedAt: number = 0;

  @Column({type: "double"})
  createdAt!: number ;

  @Column({type: "double"})
  updatedAt!: number ;
}