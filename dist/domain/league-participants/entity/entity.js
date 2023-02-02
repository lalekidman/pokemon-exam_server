"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLeagueParticipantEntity = void 0;
const enums_1 = require("../enums");
const makeLeagueParticipantEntity = ({ generateId }) => {
    class LeagueParticipantEntity {
        constructor(data) {
            this._type = enums_1.LEAGUE_PARTICIPANT_TYPE.SOLO;
            this._pokemon = '';
            this._trainer = '';
            this._league = '';
            this._leagueSlot = '';
            this.createdAt = Date.now();
            this.updatedAt = Date.now();
            const { id = generateId(), type = this._type, pokemon = this._pokemon, trainer = this._trainer, league = this._league, leagueSlot = this._leagueSlot, createdAt = this.createdAt, updatedAt = this.updatedAt, } = data;
            this.id = id;
            this.type = type;
            this.pokemon = pokemon;
            this.trainer = trainer;
            this.league = league;
            this.leagueSlot = leagueSlot;
            this.createdAt = createdAt;
            this.updatedAt = updatedAt;
        }
        /**
         * Getter type
         * @return {string }
         */
        get type() {
            return this._type;
        }
        /**
         * Setter type
         * @param {string } value
         */
        set type(value) {
            this._type = value;
        }
        /**
         * Getter pokemon
         * @return {string }
         */
        get pokemon() {
            return this._pokemon;
        }
        /**
         * Setter pokemon
         * @param {string } value
         */
        set pokemon(value) {
            this._pokemon = value;
        }
        /**
         * Getter trainer
         * @return {string }
         */
        get trainer() {
            return this._trainer;
        }
        /**
         * Setter trainer
         * @param {string } value
         */
        set trainer(value) {
            this._trainer = value;
        }
        /**
         * Getter league
         * @return {string }
         */
        get league() {
            return this._league;
        }
        /**
         * Setter league
         * @param {string } value
         */
        set league(value) {
            this._league = value;
        }
        /**
         * Getter leagueSlotId
         * @return {string }
         */
        get leagueSlot() {
            return this._leagueSlot;
        }
        /**
         * Setter leagueSlotId
         * @param {string } value
         */
        set leagueSlot(value) {
            this._leagueSlot = value;
        }
        /**
         *
         * @returns
         */
        toObject() {
            return {
                id: this.id,
                type: this._type,
                league: this._league,
                leagueSlot: this._leagueSlot,
                trainer: this._trainer,
                pokemon: this._pokemon,
                createdAt: this.createdAt,
                updatedAt: this.updatedAt
            };
        }
    }
    return LeagueParticipantEntity;
};
exports.makeLeagueParticipantEntity = makeLeagueParticipantEntity;
//# sourceMappingURL=entity.js.map