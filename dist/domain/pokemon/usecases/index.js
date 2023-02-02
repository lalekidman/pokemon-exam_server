"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonListUsecase = exports.PokemonViewDetailsUsecase = exports.PokemonCreateUsecase = void 0;
const pokemon_1 = require("@app/persistent/repository/mysql/entity/pokemon");
const create_1 = require("./create");
const view_details_1 = require("./view-details");
const list_1 = require("./list");
const usecases_1 = require("@app/domain/pokemon-stats/usecases");
const repositoryGateway = new pokemon_1.PokemonRepositoryGateway();
exports.PokemonCreateUsecase = (0, create_1.makePokemonCreateUsecase)({
    repositoryGateway,
    createPokemonStats: async (stats) => {
        try {
            const pokemonStats = await (new usecases_1.PokemonStatsCreateUsecase().execute(stats));
            return pokemonStats.id;
        }
        catch (error) {
            throw new Error("Failed to create pokemon stats. \nMessage: " + error.message);
        }
    }
});
exports.PokemonViewDetailsUsecase = (0, view_details_1.makePokemonViewDetailsUsecase)({
    repositoryGateway,
    // getPokemonStats: (id) => {
    //   return new PokemonStatsViewDetailsUsecase().getOneStrict(id)
    // }
});
exports.PokemonListUsecase = (0, list_1.makePokemonListUsecase)({
    repositoryGateway
});
//# sourceMappingURL=index.js.map