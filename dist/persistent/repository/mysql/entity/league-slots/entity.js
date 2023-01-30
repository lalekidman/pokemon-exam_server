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
exports.LeagueSlotRepositoryEntity = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../league/entity");
let LeagueSlotRepositoryEntity = class LeagueSlotRepositoryEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], LeagueSlotRepositoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entity_1.LeagueRepositoryEntity, (league) => league.id),
    __metadata("design:type", String)
], LeagueSlotRepositoryEntity.prototype, "league", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], LeagueSlotRepositoryEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    __metadata("design:type", Number)
], LeagueSlotRepositoryEntity.prototype, "totalAttack", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    __metadata("design:type", Number)
], LeagueSlotRepositoryEntity.prototype, "totalDefense", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    __metadata("design:type", Number)
], LeagueSlotRepositoryEntity.prototype, "totalSpeed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    __metadata("design:type", Number)
], LeagueSlotRepositoryEntity.prototype, "overallTotal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double" }),
    __metadata("design:type", Number)
], LeagueSlotRepositoryEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double" }),
    __metadata("design:type", Number)
], LeagueSlotRepositoryEntity.prototype, "updatedAt", void 0);
LeagueSlotRepositoryEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "league_slots" })
], LeagueSlotRepositoryEntity);
exports.LeagueSlotRepositoryEntity = LeagueSlotRepositoryEntity;
//# sourceMappingURL=entity.js.map