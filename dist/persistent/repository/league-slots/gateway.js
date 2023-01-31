"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainerRepositoryGateway = void 0;
const mongodb_1 = __importDefault(require("@app/common/gateway/repository/services/mongodb"));
const schema_1 = require("./schema");
class TrainerRepositoryGateway extends mongodb_1.default {
    constructor() {
        super(schema_1.TrainerCollectionModel);
    }
}
exports.TrainerRepositoryGateway = TrainerRepositoryGateway;
//# sourceMappingURL=gateway.js.map