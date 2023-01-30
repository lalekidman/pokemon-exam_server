"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonStatsViewDetailsUsecase = exports.PokemonStatsCreateUsecase = void 0;
const pokemon_stats_1 = require("@app/persistent/repository/mysql/entity/pokemon-stats");
const create_1 = require("./create");
const view_details_1 = require("./view-details");
const repositoryGateway = new pokemon_stats_1.PokemonStatsRepositoryGateway();
exports.PokemonStatsCreateUsecase = (0, create_1.makePokemonStatsCreateUsecase)({
    repositoryGateway
});
exports.PokemonStatsViewDetailsUsecase = (0, view_details_1.makePokemonStatsViewDetailsUsecase)({
    repositoryGateway
});
//# sourceMappingURL=index.js.map