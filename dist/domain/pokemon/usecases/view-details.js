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
                id
            });
            if (pokemon) {
                const pokemonStats = await getPokemonStats(pokemon.pokemonStats);
                return Object.assign(Object.assign({}, JSON.parse(JSON.stringify(pokemon))), { stats: {
                        attack: (pokemonStats === null || pokemonStats === void 0 ? void 0 : pokemonStats.attack) || 0,
                        defense: (pokemonStats === null || pokemonStats === void 0 ? void 0 : pokemonStats.defense) || 0,
                        speed: (pokemonStats === null || pokemonStats === void 0 ? void 0 : pokemonStats.speed) || 0,
                        total: (pokemonStats === null || pokemonStats === void 0 ? void 0 : pokemonStats.total) || 0
                    } });
            }
            return null;
        }
        /**
         *
         * @param id
         * @returns
         */
        async getOneStrict(id) {
            const pokemon = await this.getOne(id);
            if (!pokemon) {
                throw new Error("No pokemon details found.");
            }
            return pokemon;
        }
    };
};
exports.makePokemonViewDetailsUsecase = makePokemonViewDetailsUsecase;
//# sourceMappingURL=view-details.js.map