"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeTrainerCreateUsecase = void 0;
const entity_1 = require("../entity");
const makeTrainerCreateUsecase = ({ repositoryGateway }) => {
    return class TrainerCreateUsecase {
        constructor() { }
        /**
         *
         * @param data
         */
        async execute(dataInput) {
            const trainerEntity = new entity_1.TrainerEntity(dataInput);
            const trainer = await repositoryGateway.insertOne(trainerEntity.toObject());
            return trainer;
        }
    };
};
exports.makeTrainerCreateUsecase = makeTrainerCreateUsecase;
//# sourceMappingURL=create.js.map