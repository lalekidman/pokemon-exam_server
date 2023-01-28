import {
  IGeneralEntityDependencies
} from "@app/common/interfaces";
import {
  ILeagueEntity
} from './interfaces'

export const makeLeagueEntity = ({
  generateId
}: IGeneralEntityDependencies) => {
  class LeagueEntity implements ILeagueEntity {
    readonly _id: string;

    private _title: string = '';
    private _location: string = '';
    private _terrain: string = '';
    private _minSlot: number = 1;
    private _maxSlot: number = 1;

    private _owner: string = '';
    private _author: string = '';

    readonly date: Date = new Date();

    readonly createdAt: number = Date.now();
    readonly updatedAt: number = Date.now();

    constructor(data: Partial < ILeagueEntity > ) {
      const {
        _id = generateId(),

          title = this._title,
          location = this._location,
          terrain = this._terrain,

          minSlot = this._minSlot,
          maxSlot = this._maxSlot,

          owner = this._owner,
          author = this._author,

          createdAt = this.createdAt,
          updatedAt = this.updatedAt,
      } = data

      this._id = _id

      this.title = title
      this.location = location
      this.terrain = terrain

      this.minSlot = minSlot
      this.maxSlot = maxSlot

      this.owner = owner
      this.author = author


      this.createdAt = createdAt
      this.updatedAt = updatedAt
    }

    /**
     * Getter title
     * @return {string }
     */
    public get title(): string {
      return this._title;
    }

    /**
     * Setter title
     * @param {string } value
     */
    public set title(value: string) {
      this._title = value;
    }


    /**
     * Getter location
     * @return {string }
     */
    public get location(): string {
      return this._location;
    }

    /**
     * Setter location
     * @param {string } value
     */
    public set location(value: string) {
      this._location = value;
    }


    /**
     * Getter terrain
     * @return {string }
     */
    public get terrain(): string {
      return this._terrain;
    }

    /**
     * Setter terrain
     * @param {string } value
     */
    public set terrain(value: string) {
      this._terrain = value;
    }


    /**
     * Getter minSlot
     * @return {number }
     */
    public get minSlot(): number {
      return this._minSlot;
    }

    /**
     * Setter minSlot
     * @param {number } value
     */
    public set minSlot(value: number) {
      this._minSlot = value;
    }


    /**
     * Getter maxSlot
     * @return {number }
     */
    public get maxSlot(): number {
      return this._maxSlot;
    }

    /**
     * Setter maxSlot
     * @param {number } value
     */
    public set maxSlot(value: number) {
      this._maxSlot = value;
    }


    /**
     * Getter ownerId
     * @return {string }
     */
    public get owner(): string {
      return this._owner;
    }

    /**
     * Setter ownerId
     * @param {string } value
     */
    public set owner(value: string) {
      this._owner = value;
    }


    /**
     * Getter authorId
     * @return {string }
     */
    public get author(): string {
      return this._author;
    }

    /**
     * Setter authorId
     * @param {string } value
     */
    public set author(value: string) {
      this._author = value;
    }

    /**
     * 
     * @returns 
     */
    public toObject(): ILeagueEntity {
      return {
        _id: this._id,
        title: this._title,
        location: this._location,
        terrain: this._terrain,
        minSlot: this._minSlot,
        maxSlot: this._maxSlot,

        owner: this._owner,
        author: this._author,
        date: this.date,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
      }
    }

  }
  return LeagueEntity
}