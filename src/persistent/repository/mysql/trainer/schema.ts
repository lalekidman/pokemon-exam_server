import { ITrainerEntity } from '@app/domain';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from 'typeorm'

@Entity()
export class Trainer implements Omit<ITrainerEntity, '_id'> {

  @PrimaryGeneratedColumn()
  id: any;

  @Column()
  firstName: string = '';

  @Column()
  lastName: string  = '';

  @Column()
  suspended: boolean = false;

  @Column()
  suspendedAt: number = 0;

  @Column()
  createdAt: number = 0;

  @Column()
  updatedAt: number = 0;
}