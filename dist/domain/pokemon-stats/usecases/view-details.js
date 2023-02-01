"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePokemonStatsViewDetailsUsecase = void 0;
const makePokemonStatsViewDetailsUsecase = ({ repositoryGateway }) => {
    return class PokemonStatsViewDetailsUsecase {
        constructor() { }
        /**
         *
         * @param id
         * @returns
         */
        async getOne(id) {
            return repositoryGateway.findOne({
                id
            });
        }
        /**
         *
         * @param id
         * @returns
         */
        async getOneStrict(id) {
            const pokemonStats = await this.getOne(id);
            if (!pokemonStats) {
                throw new Error("No pokemon stats data found.");
            }
            return pokemonStats;
        }
    };
};
exports.makePokemonStatsViewDetailsUsecase = makePokemonStatsViewDetailsUsecase;
//# sourceMappingURL=view-details.js.map