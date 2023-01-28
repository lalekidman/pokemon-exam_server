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
     * 
     * @returns 
     */
    public toObject(): ILeagueSlotEntity {
      return {
        _id: this._id,
        league: this._league,
        type: this._type,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
      }
    }

  }
  return LeagueSlotsEntity
}