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
            const pokemonEntity = new entity_1.PokemonStatsEntity(dataInput);
            const pokemon = await repositoryGateway.insertOne(pokemonEntity.toObject());
            return pokemon;
        }
    };
};
exports.makePokemonStatsCreateUsecase = makePokemonStatsCreateUsecase;
//# sourceMappingURL=create.js.map