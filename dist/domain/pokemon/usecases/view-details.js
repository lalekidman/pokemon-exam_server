"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePokemonViewDetailsUsecase = void 0;
const makePokemonViewDetailsUsecase = ({ repositoryGateway,
// getPokemonStats
 }) => {
    return class PokemonViewDetailsUsecase {
        constructor() {
            /**
             *
             * @param id
             * @returns
             */
            this.getOne = async (id) => {
                const pokemon = (await repositoryGateway.findOne({
                    id
                }));
                if (pokemon) {
                    pokemon.pokemonStats = {
                        attack: pokemon.pokemonStats.attack,
                        speed: pokemon.pokemonStats.speed,
                        defense: pokemon.pokemonStats.defense,
                        total: pokemon.pokemonStats.total,
                    };
                }
                return pokemon;
            };
            /**
             *
             * @param id
             * @returns
             */
            this.getOneStrict = async (id) => {
                const pokemon = await this.getOne(id);
                console.log('pokemon :>> ', pokemon);
                if (!pokemon) {
                    throw new Error("No pokemon details found.");
                }
                return pokemon;
            };
        }
    };
};
exports.makePokemonViewDetailsUsecase = makePokemonViewDetailsUsecase;
//# sourceMappingURL=view-details.js.map