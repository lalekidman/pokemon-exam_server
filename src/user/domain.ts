import {
  IGeneralEntityDependencies
} from "../common/interfaces";
import {
  UserBase
} from './interfaces'

export const UserDomain = ({
  generateId
}: IGeneralEntityDependencies) => (
  class UserEntity implements UserBase {
    readonly _id: string;

    private _firstName: string = '';
    private _lastName: string = '';

    private _suspended: boolean = false;
    private _suspendedAt: number = 0;

    readonly createdAt: number = Date.now();
    readonly updatedAt: number = Date.now();

    constructor(data: Partial < UserBase > ) {
      const {
        _id = generateId(),

        firstName = this.firstName,
        lastName = this.lastName,

        suspended = this.suspended,
        suspendedAt = this.suspendedAt,

        createdAt = this.createdAt,
        updatedAt = this.updatedAt,
      } = data

      this._id = _id

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
     * Getter lastName
     * @return {string }
     */
    public get lastName(): string {
      return this._lastName;
    }

    /**
     * Getter suspended
     * @return {boolean }
     */
    public get suspended(): boolean {
      return this._suspended;
    }

    /**
     * Getter suspendedAt
     * @return {number }
     */
    public get suspendedAt(): number {
      return this._suspendedAt;
    }

    /**
     * Setter firstName
     * @param {string } value
     */
    public set firstName(value: string) {
      this._firstName = value;
    }

    /**
     * Setter lastName
     * @param {string } value
     */
    public set lastName(value: string) {
      this._lastName = value;
    }

    /**
     * Setter suspended
     * @param {boolean } value
     */
    public set suspended(value: boolean) {
      this._suspended = value;
    }

    /**
     * Setter suspendedAt
     * @param {number } value
     */
    public set suspendedAt(value: number) {
      this._suspendedAt = value;
    }

  }
)