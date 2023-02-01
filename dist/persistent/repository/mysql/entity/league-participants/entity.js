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
exports.LeagueParticipantsRepositoryEntity = void 0;
const typeorm_1 = require("typeorm");
const league_slots_1 = require("../league-slots");
const entity_1 = require("../league/entity");
const pokemon_1 = require("../pokemon");
const trainer_1 = require("../trainer");
let LeagueParticipantsRepositoryEntity = class LeagueParticipantsRepositoryEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], LeagueParticipantsRepositoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pokemon_1.PokemonRepositoryEntity, (pokemon) => pokemon.id),
    __metadata("design:type", String)
], LeagueParticipantsRepositoryEntity.prototype, "pokemon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => trainer_1.TrainerRepositoryEntity, (trainer) => trainer.id),
    __metadata("design:type", String)
], LeagueParticipantsRepositoryEntity.prototype, "trainer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entity_1.LeagueRepositoryEntity, (league) => league.id),
    __metadata("design:type", String)
], LeagueParticipantsRepositoryEntity.prototype, "league", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => league_slots_1.LeagueSlotRepositoryEntity, (leagueSlot) => leagueSlot.id),
    __metadata("design:type", String)
], LeagueParticipantsRepositoryEntity.prototype, "leagueSlot", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double" }),
    __metadata("design:type", Number)
], LeagueParticipantsRepositoryEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double" }),
    __metadata("design:type", Number)
], LeagueParticipantsRepositoryEntity.prototype, "updatedAt", void 0);
LeagueParticipantsRepositoryEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "league_participants" })
], LeagueParticipantsRepositoryEntity);
exports.LeagueParticipantsRepositoryEntity = LeagueParticipantsRepositoryEntity;
//# sourceMappingURL=entity.js.map