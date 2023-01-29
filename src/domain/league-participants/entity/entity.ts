import {
  IGeneralEntityDependencies
} from "@app/common/interfaces";
import { LEAGUE_SLOT_TYPE } from "../enums";
import {
  ILeagueParticipantEntity
} from './interfaces'

export const makeLeagueParticipantEntity = ({
  generateId
}: IGeneralEntityDependencies) => {
  class LeagueParticipantEntity implements ILeagueParticipantEntity {
    readonly _id: string;

    private _pokemon: string = '';
    private _trainerId: string = '';
    private _league: string = '';
    private _leagueSlot: string = '';

    readonly createdAt: number = Date.now();
    readonly updatedAt: number = Date.now();

    constructor(data: Partial < ILeagueParticipantEntity > ) {
      const {
        _id = generateId(),

        pokemon = this._pokemon,
        trainerId = this._trainerId,
        league = this._league,
        leagueSlot = this._leagueSlot,

        createdAt = this.createdAt,
        updatedAt = this.updatedAt,
      } = data

      this._id = _id
      this.pokemon = pokemon
      this.trainerId = trainerId
      this.league = league
      this.leagueSlot = leagueSlot

      this.createdAt = createdAt
      this.updatedAt = updatedAt
    }


    /**
     * Getter pokemon
     * @return {string }
     */
	public get pokemon(): string  {
		return this._pokemon;
	}

    /**
     * Setter pokemon
     * @param {string } value
     */
	public set pokemon(value: string ) {
		this._pokemon = value;
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


    /**
     * Getter league
     * @return {string }
     */
	public get league(): string  {
		return this._league;
	}

    /**
     * Setter league
     * @param {string } value
     */
	public set league(value: string ) {
		this._league = value;
	}


    /**
     * Getter leagueSlotId
     * @return {string }
     */
	public get leagueSlot(): string  {
		return this._leagueSlot;
	}

    /**
     * Setter leagueSlotId
     * @param {string } value
     */
	public set leagueSlot(value: string ) {
		this._leagueSlot = value;
	}

    /**
     * 
     * @returns 
     */
    public toObject(): ILeagueParticipantEntity {
      return {
        _id: this._id,
        league: this._league,
        leagueSlot: this._leagueSlot,
        trainerId: this._trainerId,
        pokemon: this._pokemon,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
      }
    }

  }
  return LeagueParticipantEntity
}