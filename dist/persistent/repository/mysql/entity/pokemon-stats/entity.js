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
exports.PokemonStatsRepositoryEntity = void 0;
const typeorm_1 = require("typeorm");
let PokemonStatsRepositoryEntity = class PokemonStatsRepositoryEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], PokemonStatsRepositoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    __metadata("design:type", Number)
], PokemonStatsRepositoryEntity.prototype, "attack", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    __metadata("design:type", Number)
], PokemonStatsRepositoryEntity.prototype, "defense", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    __metadata("design:type", Number)
], PokemonStatsRepositoryEntity.prototype, "speed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    __metadata("design:type", Number)
], PokemonStatsRepositoryEntity.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double" }),
    __metadata("design:type", Number)
], PokemonStatsRepositoryEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double" }),
    __metadata("design:type", Number)
], PokemonStatsRepositoryEntity.prototype, "updatedAt", void 0);
PokemonStatsRepositoryEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "pokemon_stats" })
], PokemonStatsRepositoryEntity);
exports.PokemonStatsRepositoryEntity = PokemonStatsRepositoryEntity;
//# sourceMappingURL=entity.js.map