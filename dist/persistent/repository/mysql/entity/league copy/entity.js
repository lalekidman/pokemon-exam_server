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
exports.LeagueRepositoryEntity = void 0;
const typeorm_1 = require("typeorm");
const trainer_1 = require("../trainer");
let LeagueRepositoryEntity = class LeagueRepositoryEntity {
    constructor() {
        this.id = '';
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], LeagueRepositoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: (new Date()).toISOString() }),
    __metadata("design:type", Date)
], LeagueRepositoryEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => trainer_1.Trainer, (trainer) => trainer.id),
    __metadata("design:type", String)
], LeagueRepositoryEntity.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => trainer_1.Trainer, (trainer) => trainer.id),
    __metadata("design:type", String)
], LeagueRepositoryEntity.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], LeagueRepositoryEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], LeagueRepositoryEntity.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], LeagueRepositoryEntity.prototype, "terrain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], LeagueRepositoryEntity.prototype, "requiredSlotSize", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], LeagueRepositoryEntity.prototype, "pokemonMaxStats", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 100 }),
    __metadata("design:type", Number)
], LeagueRepositoryEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LeagueRepositoryEntity.prototype, "updatedAt", void 0);
LeagueRepositoryEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "league" })
], LeagueRepositoryEntity);
exports.LeagueRepositoryEntity = LeagueRepositoryEntity;
//# sourceMappingURL=entity.js.map