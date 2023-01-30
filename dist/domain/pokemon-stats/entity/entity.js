"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePokemonStatsEntity = void 0;
const makePokemonStatsEntity = ({ generateId }) => {
    class PokemonStatsEntity {
        constructor(data) {
            this._attack = 0;
            this._defense = 0;
            this._speed = 0;
            this.createdAt = Date.now();
            this.updatedAt = Date.now();
            const { id = generateId(), attack = this._attack, defense = this._defense, speed = this._speed, createdAt = this.createdAt, updatedAt = this.updatedAt, } = data;
            this.id = id;
            this.attack = attack,
                this.defense = defense,
                this.speed = speed,
                this.createdAt = createdAt;
            this.updatedAt = updatedAt;
        }
        /**
         * Getter attack
         * @return {number }
         */
        get attack() {
            return this._attack;
        }
        /**
         * Setter attack
         * @param {number } value
         */
        set attack(value) {
            this._attack = value;
        }
        /**
         * Getter defense
         * @return {number }
         */
        get defense() {
            return this._defense;
        }
        /**
         * Setter defense
         * @param {number } value
         */
        set defense(value) {
            this._defense = value;
        }
        /**
         * Getter speed
         * @return {number }
         */
        get speed() {
            return this._speed;
        }
        /**
         * Setter speed
         * @param {number } value
         */
        set speed(value) {
            this._speed = value;
        }
        get total() {
            return this._attack + this._defense + this._speed;
        }
        /**
         *
         * @returns
         */
        toObject() {
            return {
                id: this.id,
                attack: this._attack,
                defense: this._defense,
                speed: this._speed,
                total: this.total,
                createdAt: this.createdAt,
                updatedAt: this.updatedAt
            };
        }
    }
    return PokemonStatsEntity;
};
exports.makePokemonStatsEntity = makePokemonStatsEntity;
//# sourceMappingURL=entity.js.map