import { IsString } from "@app/common/decorators";
import {
  IGeneralEntityDependencies
} from "@app/common/interfaces";
import {
  IPokemonEntity
} from './interfaces'

export const makePokemonEntity = ({
  generateId
}: IGeneralEntityDependencies) => {
  class PokemonEntity implements IPokemonEntity {
    readonly id!: string;
  
    private _name: string = '';
    private _type: string = '';
    private _pokemonStats: string = '';
    private _trainerId: string = '';
  
    readonly createdAt: number = Date.now();
    readonly updatedAt: number = Date.now();
  
    constructor(data: Partial < IPokemonEntity > ) {
      const {
        id = generateId(),
  
        name = this._name,
        type = this._type,
        pokemonStats = this._pokemonStats,
        trainerId = this._trainerId,

        createdAt = this.createdAt,
        updatedAt = this.updatedAt,
      } = data
  
      this.id = id
  
      this.name = name
      this.type = type
      this.pokemonStats = pokemonStats
      this.trainerId = trainerId
  
      this.createdAt = createdAt
      this.updatedAt = updatedAt
    }
  
  
    /**
     * Getter name
     * @return {string }
     */
    public get name(): string {
      return this._name;
    }
  
    /**
     * Setter name
     * @param {string } value
     */
    @IsString({
      maxLength: 32,
      minLength: 2
    })
    public set name(value: string) {
      this._name = value;
    }
  
    /**
     * Getter type
     * @return {string }
     */
    public get type(): string {
      return this._type;
    }
    
    /**
     * Setter type
     * @param {string } value
     */
    @IsString({
      maxLength: 32,
      minLength: 2
    })
    @IsString()
    public set type(value: string) {
      // could add more validation here for the allowed types.
      this._type = value;
    }


    /**
     * Getter pokemonStats
     * @return {string }
     */
    public get pokemonStats(): string  {
      return this._pokemonStats;
    }

      /**
       * Setter pokemonStats
       * @param {string } value
       */
    public set pokemonStats(value: string ) {
      this._pokemonStats = value;
    }


    /**
     * Getter trainerId
     * @return {string }
     */
    public get trainerId(): string  {
      return this._trainerId;
    }

    /**
     * Setter trainerId
     * @param {string } value
     */
    public set trainerId(value: string ) {
      this._trainerId = value;
    }

    public toObject (): IPokemonEntity {
      return {
        id: this.id,
        name: this._name,
        type: this._type,
        pokemonStats: this._pokemonStats,
        trainerId: this._trainerId,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
      }
    }
  }
  return PokemonEntity
}