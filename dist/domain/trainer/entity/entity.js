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
exports.makeTrainerEntity = void 0;
const decorators_1 = require("@app/common/decorators");
const makeTrainerEntity = ({ generateId }) => {
    class TrainerEntity {
        constructor(data) {
            this._firstName = '';
            this._lastName = '';
            this._suspended = false;
            this._suspendedAt = 0;
            this.createdAt = Date.now();
            this.updatedAt = Date.now();
            const { id = generateId(), firstName = this.firstName, lastName = this.lastName, suspended = this.suspended, suspendedAt = this.suspendedAt, createdAt = this.createdAt, updatedAt = this.updatedAt, } = data;
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.suspended = suspended;
            this.suspendedAt = suspendedAt;
            this.createdAt = createdAt;
            this.updatedAt = updatedAt;
        }
        /**
         * Getter firstName
         * @return {string }
         */
        get firstName() {
            return this._firstName;
        }
        /**
         * Setter firstName
         * @param {string } value
         */
        set firstName(value) {
            this._firstName = value;
        }
        /**
         * Getter lastName
         * @return {string }
         */
        get lastName() {
            return this._lastName;
        }
        /**
         * Setter lastName
         * @param {string } value
         */
        set lastName(value) {
            this._lastName = value;
        }
        /**
         * Getter suspended
         * @return {boolean }
         */
        get suspended() {
            return this._suspended;
        }
        /**
         * Setter suspended
         * @param {boolean } value
         */
        set suspended(value) {
            this._suspended = value;
        }
        /**
         * Getter suspendedAt
         * @return {number }
         */
        get suspendedAt() {
            return this._suspendedAt;
        }
        /**
         * Setter suspendedAt
         * @param {number } value
         */
        set suspendedAt(value) {
            this._suspendedAt = value;
        }
        toObject() {
            return {
                id: this.id,
                firstName: this._firstName,
                lastName: this._lastName,
                suspended: this._suspended,
                suspendedAt: this._suspendedAt,
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
    ], TrainerEntity.prototype, "firstName", null);
    __decorate([
        (0, decorators_1.IsString)({
            maxLength: 32,
            minLength: 2
        }),
        (0, decorators_1.IsString)(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TrainerEntity.prototype, "lastName", null);
    __decorate([
        (0, decorators_1.IsBoolean)(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TrainerEntity.prototype, "suspended", null);
    __decorate([
        (0, decorators_1.IsNumeric)(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TrainerEntity.prototype, "suspendedAt", null);
    return TrainerEntity;
};
exports.makeTrainerEntity = makeTrainerEntity;
//# sourceMappingURL=entity.js.map