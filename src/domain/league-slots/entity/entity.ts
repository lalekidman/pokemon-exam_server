import {
  IGeneralEntityDependencies
} from "@app/common/interfaces";
import { LEAGUE_SLOT_TYPE } from "../enums";
import {
  ILeagueSlotEntity
} from './interfaces'

export const makeLeagueSlotsEntity = ({
  generateId
}: IGeneralEntityDependencies) => {
  class LeagueSlotsEntity implements ILeagueSlotEntity {
    readonly _id: string;

    private _type: string = LEAGUE_SLOT_TYPE.SOLO;
    private _league: string = '';


    private _totalAttack: number = 0;
    private _totalDefense: number = 0;
    private _totalSpeed: number = 0;
    private _overallTotal: number = 0;

    readonly createdAt: number = Date.now();
    readonly updatedAt: number = Date.now();

    constructor(data: Partial < ILeagueSlotEntity > ) {
      const {
        _id = generateId(),

        type = this._type,
        league = this._league,

        createdAt = this.createdAt,
        updatedAt = this.updatedAt,
      } = data

      this._id = _id
      this.type = type
      this.league = league

      this.createdAt = createdAt
      this.updatedAt = updatedAt
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
    public set type(value: string) {
      this._type = value;
    }


    /**
     * Getter league
     * @return {string }
     */
    public get league(): string {
      return this._league;
    }

    /**
     * Setter league
     * @param {string } value
     */
    public set league(value: string) {
      this._league = value;
    }


    /**
     * Getter totalAttack
     * @return {number }
     */
	public get totalAttack(): number  {
		return this._totalAttack;
	}

    /**
     * Setter totalAttack
     * @param {number } value
     */
	public set totalAttack(value: number ) {
		this._totalAttack = value;
	}


    /**
     * Getter totalDefense
     * @return {number }
     */
	public get totalDefense(): number  {
		return this._totalDefense;
	}

    /**
     * Setter totalDefense
     * @param {number } value
     */
	public set totalDefense(value: number ) {
		this._totalDefense = value;
	}


    /**
     * Getter totalSpeed
     * @return {number }
     */
	public get totalSpeed(): number  {
		return this._totalSpeed;
	}

    /**
     * Setter totalSpeed
     * @param {number } value
     */
	public set totalSpeed(value: number ) {
		this._totalSpeed = value;
	}


    /**
     * Getter overallTotal
     * @return {number }
     */
	public get overallTotal(): number  {
		return this._overallTotal;
	}

    /**
     * Setter overallTotal
     * @param {number } value
     */
	public set overallTotal(value: number ) {
		this._overallTotal = value;
	}


    /**
     * 
     * @returns 
     */
    public toObject(): ILeagueSlotEntity {
      return {
        _id: this._id,
        league: this._league,
        type: this._type,
        totalAttack: this._totalAttack,
        totalDefense: this._totalDefense,
        totalSpeed: this._totalSpeed,
        overallTotal: this._overallTotal,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
      }
    }

  }
  return LeagueSlotsEntity
}