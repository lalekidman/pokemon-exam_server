"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueSlotCreateUsecase = void 0;
const league_slots_1 = require("@app/persistent/repository/mysql/entity/league-slots");
const create_1 = require("./create");
const usecases_1 = require("@app/domain/league/usecases");
const usecases_2 = require("@app/domain/league-participants/usecases");
const usecases_3 = require("@app/domain/pokemon/usecases");
const repositoryGateway = new league_slots_1.LeagueSlotRepositoryGateway();
exports.LeagueSlotCreateUsecase = (0, create_1.makeLeagueSlotCreateUsecase)({
    repositoryGateway,
    validateMaximumSlotLimit: async (league, slotSize) => await (new usecases_1.LeagueValidateUsecase()).validateMaxSlot(league, slotSize),
    validatePokemonMaximumStats: async (league, slotOverallStats) => await (new usecases_1.LeagueValidateUsecase()).validateMaxPokemonStats(league, slotOverallStats),
    createLeagueParticipants: (leagueSlot, dataInput) => {
        return new usecases_2.LeagueParticipantCreateUsecase().execute(leagueSlot, dataInput);
    },
    getPokemonDetails: (id) => new usecases_3.PokemonViewDetailsUsecase().getOne(id)
    // can be do in much short way but seems complicated to read.
    // checkSlotLimit: (new LeagueValidateUsecase()).validateMaxSlot
});
//# sourceMappingURL=index.js.map