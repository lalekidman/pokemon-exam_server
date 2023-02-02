import {
  IGeneralEntityDependencies
} from "@app/common/interfaces";
import { LEAGUE_PARTICIPANT_TYPE } from "../enums";
import {
  ILeagueParticipantEntity
} from './interfaces'

export const makeLeagueParticipantEntity = ({
  generateId
}: IGeneralEntityDependencies) => {
  class LeagueParticipantEntity implements ILeagueParticipantEntity {
    readonly id: string;

    private _type:string = LEAGUE_PARTICIPANT_TYPE.SOLO;
    private _pokemon: string = '';
    private _trainer: string = '';
    private _league: string = '';
    private _leagueSlot: string = '';

    readonly createdAt: number = Date.now();
    readonly updatedAt: number = Date.now();

    constructor(data: Partial < ILeagueParticipantEntity > ) {
      const {
        id = generateId(),

        type = this._type,

        pokemon = this._pokemon,
        trainer = this._trainer,
        league = this._league,
        leagueSlot = this._leagueSlot,

        createdAt = this.createdAt,
        updatedAt = this.updatedAt,
      } = data

      this.id = id
      this.type = type
      this.pokemon = pokemon
      this.trainer = trainer
      this.league = league
      this.leagueSlot = leagueSlot

      this.createdAt = createdAt
      this.updatedAt = updatedAt
    }


    /**
     * Getter type
     * @return {string }
     */
	public get type(): string  {
		return this._type;
	}

    /**
     * Setter type
     * @param {string } value
     */
	public set type(value: string ) {
		this._type = value;
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
     * Getter trainer
     * @return {string }
     */
	public get trainer(): string  {
		return this._trainer;
	}

    /**
     * Setter trainer
     * @param {string } value
     */
	public set trainer(value: string ) {
		this._trainer = value;
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
        id: this.id,
        type: this._type,
        league: this._league,
        leagueSlot: this._leagueSlot,
        trainer: this._trainer,
        pokemon: this._pokemon,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
      }
    }

  }
  return LeagueParticipantEntity
}