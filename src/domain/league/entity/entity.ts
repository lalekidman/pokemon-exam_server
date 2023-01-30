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
    readonly id!: string;

    private _title: string = '';
    private _location: string = '';
    private _terrain: string = '';


    private _pokemonMaxStats: number = 0;
    private _requiredSlotSize: number = 0;

    private _owner: string = '';
    private _author: string = '';

    readonly date: Date = new Date();

    readonly createdAt: number = Date.now();
    readonly updatedAt: number = Date.now();

    constructor(data: Partial < ILeagueEntity > ) {
      const {
        id = generateId(),

          title = this._title,
          location = this._location,
          terrain = this._terrain,

          pokemonMaxStats = this._pokemonMaxStats,
          requiredSlotSize = this._requiredSlotSize,

          owner = this._owner,
          author = this._author,

          createdAt = this.createdAt,
          updatedAt = this.updatedAt,
      } = data

      this.id = id

      this.title = title
      this.location = location
      this.terrain = terrain

      this.pokemonMaxStats = pokemonMaxStats
      this.requiredSlotSize = requiredSlotSize

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
     * Getter pokemonMaxStats
     * @return {number }
     */
	public get pokemonMaxStats(): number  {
		return this._pokemonMaxStats;
	}

    /**
     * Setter pokemonMaxStats
     * @param {number } value
     */
	public set pokemonMaxStats(value: number ) {
		this._pokemonMaxStats = value;
	}


    /**
     * Getter requiredSlotSize
     * @return {number }
     */
	public get requiredSlotSize(): number  {
		return this._requiredSlotSize;
	}

    /**
     * Setter requiredSlotSize
     * @param {number } value
     */
	public set requiredSlotSize(value: number ) {
		this._requiredSlotSize = value;
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
        id: this.id,
        title: this._title,
        location: this._location,
        terrain: this._terrain,

        pokemonMaxStats: this._pokemonMaxStats,
        requiredSlotSize: this._requiredSlotSize,

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