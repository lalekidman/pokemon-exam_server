"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLeagueSlotsEntity = void 0;
const enums_1 = require("../enums");
const makeLeagueSlotsEntity = ({ generateId }) => {
    class LeagueSlotsEntity {
        constructor(data) {
            this._type = enums_1.LEAGUE_SLOT_TYPE.SOLO;
            this._league = '';
            this._totalAttack = 0;
            this._totalDefense = 0;
            this._totalSpeed = 0;
            this.createdAt = Date.now();
            this.updatedAt = Date.now();
            const { id = generateId(), type = this._type, league = this._league, totalAttack = this._totalAttack, totalDefense = this._totalDefense, totalSpeed = this._totalSpeed, createdAt = this.createdAt, updatedAt = this.updatedAt, } = data;
            this.id = id;
            this.type = type;
            this.league = league;
            this.totalAttack = totalAttack;
            this.totalDefense = totalDefense;
            this.totalSpeed = totalSpeed;
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
         * Getter totalAttack
         * @return {number }
         */
        get totalAttack() {
            return this._totalAttack;
        }
        /**
         * Setter totalAttack
         * @param {number } value
         */
        set totalAttack(value) {
            this._totalAttack = value;
        }
        /**
         * Getter totalDefense
         * @return {number }
         */
        get totalDefense() {
            return this._totalDefense;
        }
        /**
         * Setter totalDefense
         * @param {number } value
         */
        set totalDefense(value) {
            this._totalDefense = value;
        }
        /**
         * Getter totalSpeed
         * @return {number }
         */
        get totalSpeed() {
            return this._totalSpeed;
        }
        /**
         * Setter totalSpeed
         * @param {number } value
         */
        set totalSpeed(value) {
            this._totalSpeed = value;
        }
        /**
         * Getter overallTotal
         * @return {number }
         */
        get overallTotal() {
            return this._totalAttack + this._totalDefense + this._totalSpeed;
        }
        /**
         *
         * @returns
         */
        toObject() {
            return {
                id: this.id,
                league: this._league,
                type: this._type,
                totalAttack: this._totalAttack,
                totalDefense: this._totalDefense,
                totalSpeed: this._totalSpeed,
                overallTotal: this.overallTotal,
                createdAt: this.createdAt,
                updatedAt: this.updatedAt
            };
        }
    }
    return LeagueSlotsEntity;
};
exports.makeLeagueSlotsEntity = makeLeagueSlotsEntity;
//# sourceMappingURL=entity.js.map