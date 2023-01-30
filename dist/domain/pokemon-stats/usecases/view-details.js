"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePokemonStatsViewDetailsUsecase = void 0;
const makePokemonStatsViewDetailsUsecase = ({ repositoryGateway }) => {
    return class PokemonStatsViewDetailsUsecase {
        constructor() { }
        /***
         *
         */
        async getOne(id) {
            return repositoryGateway.findOne({
                _id: id
            });
        }
    };
};
exports.makePokemonStatsViewDetailsUsecase = makePokemonStatsViewDetailsUsecase;
//# sourceMappingURL=view-details.js.map