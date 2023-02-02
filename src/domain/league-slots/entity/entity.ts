import {
  IGeneralEntityDependencies
} from "@app/common/interfaces";
import {
  ILeagueSlotEntity
} from './interfaces'

export const makeLeagueSlotsEntity = ({
  generateId
}: IGeneralEntityDependencies) => {
  class LeagueSlotsEntity implements ILeagueSlotEntity {
    readonly id!: string;

    private _league: string = '';

    private _totalAttack: number = 0;
    private _totalDefense: number = 0;
    private _totalSpeed: number = 0;

    readonly createdAt: number = Date.now();
    readonly updatedAt: number = Date.now();

    constructor(data: Partial < Omit<ILeagueSlotEntity, 'overallTotal'> > ) {
      const {
        id = generateId(),

        league = this._league,
        totalAttack = this._totalAttack,
        totalDefense = this._totalDefense,
        totalSpeed = this._totalSpeed,

        createdAt = this.createdAt,
        updatedAt = this.updatedAt,
      } = data

      this.id = id
      this.league = league

      this.totalAttack = totalAttack
      this.totalDefense = totalDefense
      this.totalSpeed = totalSpeed

      this.createdAt = createdAt
      this.updatedAt = updatedAt
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
		return this._totalAttack + this._totalDefense + this._totalSpeed
	}


    /**
     * 
     * @returns 
     */
    public toObject(): ILeagueSlotEntity {
      return {
        id: this.id,
        league: this._league,
        totalAttack: this._totalAttack,
        totalDefense: this._totalDefense,
        totalSpeed: this._totalSpeed,
        overallTotal: this.overallTotal,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
      }
    }

  }
  return LeagueSlotsEntity
}