"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePokemonViewDetailsUsecase = void 0;
const makePokemonViewDetailsUsecase = ({ repositoryGateway, getPokemonStats }) => {
    return class PokemonViewDetailsUsecase {
        constructor() { }
        /**
         *
         * @param id
         * @returns
         */
        async getOne(id) {
            const pokemon = await repositoryGateway.findOne({
                _id: id
            });
            const stats = await getPokemonStats(pokemon.pokemonStats);
            return Object.assign(Object.assign({}, JSON.parse(JSON.stringify(pokemon))), { stats });
        }
    };
};
exports.makePokemonViewDetailsUsecase = makePokemonViewDetailsUsecase;
//# sourceMappingURL=view-details.js.map