"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLeagueValidateUsecase = void 0;
const makeLeagueValidateUsecase = ({ repositoryGateway }) => {
    return class LeagueValidateUsecase {
        constructor() { }
        /**
         *
         * @param id
         * @param slotSize size to validate
         * @returns
         */
        async validateMaxSlot(league, slotSize) {
            if (league) {
                if (league.requiredSlotSize < slotSize) {
                    throw new Error("Unable to add slot, reached the maximum required slot.");
                }
            }
            return true;
        }
        /**
         *
         * @param id
         * @param maxStats overall stats to validate
         * @returns
         */
        validateMaxPokemonStats(league, maxStats) {
            if (league) {
                if (league.pokemonMaxStats < maxStats) {
                    throw new Error("Unable to add slot, reached the maximum stats allowed.");
                }
            }
            return true;
        }
    };
};
exports.makeLeagueValidateUsecase = makeLeagueValidateUsecase;
//# sourceMappingURL=validation.js.map