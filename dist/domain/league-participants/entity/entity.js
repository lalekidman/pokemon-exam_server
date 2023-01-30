"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLeagueParticipantEntity = void 0;
const makeLeagueParticipantEntity = ({ generateId }) => {
    class LeagueParticipantEntity {
        constructor(data) {
            this._pokemon = '';
            this._trainerId = '';
            this._league = '';
            this._leagueSlot = '';
            this.createdAt = Date.now();
            this.updatedAt = Date.now();
            const { id = generateId(), pokemon = this._pokemon, trainerId = this._trainerId, league = this._league, leagueSlot = this._leagueSlot, createdAt = this.createdAt, updatedAt = this.updatedAt, } = data;
            this.id = id;
            this.pokemon = pokemon;
            this.trainerId = trainerId;
            this.league = league;
            this.leagueSlot = leagueSlot;
            this.createdAt = createdAt;
            this.updatedAt = updatedAt;
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
         * Getter trainerId
         * @return {string }
         */
        get trainerId() {
            return this._trainerId;
        }
        /**
         * Setter trainerId
         * @param {string } value
         */
        set trainerId(value) {
            this._trainerId = value;
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
                league: this._league,
                leagueSlot: this._leagueSlot,
                trainerId: this._trainerId,
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