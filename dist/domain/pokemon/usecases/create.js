"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePokemonCreateUsecase = void 0;
const entity_1 = require("../entity");
const makePokemonCreateUsecase = ({ repositoryGateway, createPokemonStats }) => {
    return class PokemonCreateUsecase {
        constructor() { }
        /**
         *
         * @param data
         */
        async execute(trainer, dataInput) {
            const pokemonEntity = new entity_1.PokemonEntity(Object.assign(Object.assign({}, dataInput), { trainer }));
            // or 
            pokemonEntity.pokemonStats = await createPokemonStats(dataInput.stats);
            const pokemon = await repositoryGateway.insertOne(pokemonEntity.toObject());
            return pokemon;
        }
    };
};
exports.makePokemonCreateUsecase = makePokemonCreateUsecase;
//# sourceMappingURL=create.js.map