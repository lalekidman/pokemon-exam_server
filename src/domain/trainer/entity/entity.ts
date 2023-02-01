import { IsString, IsBoolean, IsNumeric } from "@app/common/decorators";
import {
  IGeneralEntityDependencies
} from "@app/common/interfaces";
import {
  ITrainerEntity
} from './interfaces'

export const makeTrainerEntity = ({
  generateId
}: IGeneralEntityDependencies) => {
  class TrainerEntity implements ITrainerEntity {
    readonly id!: string;
  
    private _firstName: string = '';
    private _lastName: string = '';
  
    private _suspended: boolean = false;
    private _suspendedAt: number = 0;
  
    readonly createdAt: number = Date.now();
    readonly updatedAt: number = Date.now();
  
    constructor(data: Partial < ITrainerEntity > ) {
      const {
        id = generateId(),
  
        firstName = this._firstName,
        lastName = this._lastName,
  
        suspended = this._suspended,
        suspendedAt = this._suspendedAt,
  
        createdAt = this.createdAt,
        updatedAt = this.updatedAt,
      } = data
  
      this.id = id
  
      this.firstName = firstName
      this.lastName = lastName
  
      this.suspended = suspended
      this.suspendedAt = suspendedAt
  
  
      this.createdAt = createdAt
      this.updatedAt = updatedAt
    }
  
  
    /**
     * Getter firstName
     * @return {string }
     */
    public get firstName(): string {
      return this._firstName;
    }
  
    /**
     * Setter firstName
     * @param {string } value
     */
    @IsString({
      // maxLength: 32,
      // minLength: 2,
      // required: true
    })
    public set firstName(value: string) {
      this._firstName = value;
    }
  
    /**
     * Getter lastName
     * @return {string }
     */
    public get lastName(): string {
      return this._lastName;
    }
    
    /**
     * Setter lastName
     * @param {string } value
     */
    @IsString({
      maxLength: 32,
      minLength: 2,
      required: true
    })
    @IsString()
    public set lastName(value: string) {
      this._lastName = value;
    }
  
    /**
     * Getter suspended
     * @return {boolean }
     */
    public get suspended(): boolean {
      return this._suspended;
    }
  
    /**
     * Setter suspended
     * @param {boolean } value
     */
    @IsBoolean()
    public set suspended(value: boolean) {
      this._suspended = value;
    }
  
    /**
     * Getter suspendedAt
     * @return {number }
     */
    @IsNumeric()
    public get suspendedAt(): number {
      return this._suspendedAt;
    }
  
    /**
     * Setter suspendedAt
     * @param {number } value
     */
    public set suspendedAt(value: number) {
      this._suspendedAt = value;
    }

    public toObject (): ITrainerEntity {
      return {
        id: this.id,
        firstName: this._firstName,
        lastName: this._lastName,
        suspended: this._suspended,
        suspendedAt: this._suspendedAt,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
      }
    }
  }
  return TrainerEntity
}