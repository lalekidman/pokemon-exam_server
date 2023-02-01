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
exports.PokemonRepositoryEntity = void 0;
const typeorm_1 = require("typeorm");
const trainer_1 = require("../trainer");
const pokemon_stats_1 = require("../pokemon-stats");
const constants_1 = require("@app/common/constants");
let PokemonRepositoryEntity = class PokemonRepositoryEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], PokemonRepositoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], PokemonRepositoryEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], PokemonRepositoryEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => pokemon_stats_1.PokemonStatsRepositoryEntity, (pokemonStats) => pokemonStats.id),
    __metadata("design:type", String)
], PokemonRepositoryEntity.prototype, "pokemonStatsId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => trainer_1.TrainerRepositoryEntity, (trainer) => trainer.id),
    __metadata("design:type", String)
], PokemonRepositoryEntity.prototype, "trainer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double" }),
    __metadata("design:type", Number)
], PokemonRepositoryEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double" }),
    __metadata("design:type", Number)
], PokemonRepositoryEntity.prototype, "updatedAt", void 0);
PokemonRepositoryEntity = __decorate([
    (0, typeorm_1.Entity)({ name: constants_1.TABLE_NAMES.POKEMON })
], PokemonRepositoryEntity);
exports.PokemonRepositoryEntity = PokemonRepositoryEntity;
//# sourceMappingURL=entity.js.map