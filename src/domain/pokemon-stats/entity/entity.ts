import { IsString } from "@app/common/decorators";
import {
  IGeneralEntityDependencies
} from "@app/common/interfaces";
import {
  IPokemonStatsEntity
} from './interfaces'

export const makePokemonStatsEntity = ({
  generateId
}: IGeneralEntityDependencies) => {
  class PokemonStatsEntity implements IPokemonStatsEntity {
    readonly id!: string;
  
    private _attack: number = 0;
    private _defense: number = 0;
    private _speed: number = 0;
  
    readonly createdAt: number = Date.now();
    readonly updatedAt: number = Date.now();
  
    constructor(data: Partial < IPokemonStatsEntity > ) {
      const {
        id = generateId(),
  
        attack = this._attack,
        defense = this._defense,
        speed = this._speed,

        createdAt = this.createdAt,
        updatedAt = this.updatedAt,
      } = data
  
      this.id = id

      this.attack = attack,
      this.defense = defense,
      this.speed = speed,

      this.createdAt = createdAt
      this.updatedAt = updatedAt
    }

    /**
     * Getter attack
     * @return {number }
     */
    public get attack(): number  {
      return this._attack;
    }

    /**
     * Setter attack
     * @param {number } value
     */
    public set attack(value: number ) {
      this._attack = value;
    }


    /**
     * Getter defense
     * @return {number }
     */
    public get defense(): number  {
      return this._defense;
    }

    /**
     * Setter defense
     * @param {number } value
     */
    public set defense(value: number ) {
      this._defense = value;
    }


    /**
     * Getter speed
     * @return {number }
     */
    public get speed(): number  {
      return this._speed;
    }

    /**
     * Setter speed
     * @param {number } value
     */
    public set speed(value: number ) {
      this._speed = value;
    }

    public get total(): number {
      return this._attack + this._defense + this._speed
    }

    /**
     * 
     * @returns 
     */
    public toObject (): IPokemonStatsEntity {
      return {
        id: this.id,
        attack: this._attack,
        defense: this._defense,
        speed: this._speed,
        total: this.total,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
      }
    }
  }
  return PokemonStatsEntity
}