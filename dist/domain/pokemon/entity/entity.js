"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePokemonEntity = void 0;
const decorators_1 = require("@app/common/decorators");
const makePokemonEntity = ({ generateId }) => {
    class PokemonEntity {
        constructor(data) {
            this._name = '';
            this._type = '';
            this._pokemonStats = '';
            this._trainerId = '';
            this.createdAt = Date.now();
            this.updatedAt = Date.now();
            const { id = generateId(), name = this._name, type = this._type, pokemonStats = this._pokemonStats, trainerId = this._trainerId, createdAt = this.createdAt, updatedAt = this.updatedAt, } = data;
            this.id = id;
            this.name = name;
            this.type = type;
            this.pokemonStats = pokemonStats;
            this.trainerId = trainerId;
            this.createdAt = createdAt;
            this.updatedAt = updatedAt;
        }
        /**
         * Getter name
         * @return {string }
         */
        get name() {
            return this._name;
        }
        /**
         * Setter name
         * @param {string } value
         */
        set name(value) {
            this._name = value;
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
            // could add more validation here for the allowed types.
            this._type = value;
        }
        /**
         * Getter pokemonStats
         * @return {string }
         */
        get pokemonStats() {
            return this._pokemonStats;
        }
        /**
         * Setter pokemonStats
         * @param {string } value
         */
        set pokemonStats(value) {
            this._pokemonStats = value;
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
        toObject() {
            return {
                id: this.id,
                name: this._name,
                type: this._type,
                pokemonStats: this._pokemonStats,
                trainerId: this._trainerId,
                createdAt: this.createdAt,
                updatedAt: this.updatedAt
            };
        }
    }
    __decorate([
        (0, decorators_1.IsString)({
            maxLength: 32,
            minLength: 2
        }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PokemonEntity.prototype, "name", null);
    __decorate([
        (0, decorators_1.IsString)({
            maxLength: 32,
            minLength: 2
        }),
        (0, decorators_1.IsString)(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PokemonEntity.prototype, "type", null);
    return PokemonEntity;
};
exports.makePokemonEntity = makePokemonEntity;
//# sourceMappingURL=entity.js.map