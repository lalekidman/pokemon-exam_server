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
exports.TrainerRepositoryEntity = void 0;
const typeorm_1 = require("typeorm");
let TrainerRepositoryEntity = class TrainerRepositoryEntity {
    constructor() {
        this.id = '';
        this.firstName = '';
        this.lastName = '';
        this.suspended = false;
        this.suspendedAt = 0;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], TrainerRepositoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TrainerRepositoryEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TrainerRepositoryEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], TrainerRepositoryEntity.prototype, "suspended", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TrainerRepositoryEntity.prototype, "suspendedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double" }),
    __metadata("design:type", Number)
], TrainerRepositoryEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double" }),
    __metadata("design:type", Number)
], TrainerRepositoryEntity.prototype, "updatedAt", void 0);
TrainerRepositoryEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "trainers" })
], TrainerRepositoryEntity);
exports.TrainerRepositoryEntity = TrainerRepositoryEntity;
//# sourceMappingURL=entity.js.map