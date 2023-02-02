import { TABLE_NAMES } from '@app/common/constants';
import { ITrainerEntity } from '@app/domain/trainer/entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from 'typeorm'

@Entity({name: TABLE_NAMES.TRAINER})
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