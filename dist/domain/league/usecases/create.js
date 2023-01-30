"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLeagueCreateUsecase = void 0;
const entity_1 = require("../entity");
const makeLeagueCreateUsecase = ({ repositoryGateway }) => {
    return class LeagueCreateUsecase {
        constructor() { }
        /**
         * to create a league
         * @param trainer id of the trainer
         * @param dataInput
         * @returns
         */
        async execute(trainer, dataInput) {
            const leagueEntity = new entity_1.LeagueEntity(Object.assign(Object.assign({}, dataInput), { owner: trainer, author: trainer }));
            const league = await repositoryGateway.insertOne(leagueEntity.toObject());
            return league;
        }
    };
};
exports.makeLeagueCreateUsecase = makeLeagueCreateUsecase;
//# sourceMappingURL=create.js.map