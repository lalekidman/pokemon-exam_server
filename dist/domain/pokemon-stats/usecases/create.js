"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePokemonStatsCreateUsecase = void 0;
const entity_1 = require("../entity");
const makePokemonStatsCreateUsecase = ({ repositoryGateway }) => {
    return class PokemonStatsCreateUsecase {
        constructor() { }
        /**
         *
         * @param data
         */
        async execute(dataInput) {
            const pokemonStatsEntity = new entity_1.PokemonStatsEntity(dataInput);
            const pokemonStats = await repositoryGateway.insertOne(pokemonStatsEntity.toObject());
            return pokemonStats;
        }
    };
};
exports.makePokemonStatsCreateUsecase = makePokemonStatsCreateUsecase;
//# sourceMappingURL=create.js.map