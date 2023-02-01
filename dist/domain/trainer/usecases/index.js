"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainerListUsecase = exports.TrainerCreateUsecase = void 0;
const trainer_1 = require("@app/persistent/repository/mysql/entity/trainer");
const create_1 = require("./create");
const list_1 = require("./list");
const repositoryGateway = new trainer_1.TrainerRepositoryGateway();
exports.TrainerCreateUsecase = (0, create_1.makeTrainerCreateUsecase)({
    repositoryGateway
});
exports.TrainerListUsecase = (0, list_1.makeTrainerListUsecase)({
    repositoryGateway
});
//# sourceMappingURL=index.js.map