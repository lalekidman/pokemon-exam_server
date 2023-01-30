"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainerCreateUsecase = void 0;
const trainer_1 = require("@app/persistent/repository/mysql/entity/trainer");
const create_1 = require("./create");
const repositoryGateway = new trainer_1.TrainerRepositoryGateway();
exports.TrainerCreateUsecase = (0, create_1.makeTrainerCreateUsecase)({
    repositoryGateway
});
//# sourceMappingURL=index.js.map