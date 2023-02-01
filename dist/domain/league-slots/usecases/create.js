"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLeagueSlotCreateUsecase = void 0;
const entity_1 = require("../entity");
const makeLeagueSlotCreateUsecase = ({ repositoryGateway, validateMaximumSlotLimit, validatePokemonMaximumStats, createLeagueParticipants, getPokemonDetails }) => {
    return class LeagueSlotCreateUsecase {
        constructor() { }
        /**
         * to create league slots
         * @param dataInput
         * @returns
         */
        async execute(league, dataInput) {
            const { participants, type, } = dataInput;
            // could add limit here?
            const leagueSlotEntity = new entity_1.LeagueSlotsEntity({
                league: league.id,
                type
            });
            const size = await repositoryGateway.count({
                league: leagueSlotEntity.league
            });
            console.log('size :>> ', size);
            const result = await validateMaximumSlotLimit(league, size);
            if (!result) {
                // throw error here that already reached the limit.
                throw new Error("reached the maximum slot limit.");
            }
            for (const participant of participants) {
                const pokemon = await getPokemonDetails(participant.pokemon);
                leagueSlotEntity.totalAttack += pokemon.stats.attack;
                leagueSlotEntity.totalDefense += pokemon.stats.defense;
                leagueSlotEntity.totalSpeed += pokemon.stats.speed;
            }
            console.log('leagueSlotEntity :>> ', leagueSlotEntity);
            // validate the maximum stats allowed
            await validatePokemonMaximumStats(league, leagueSlotEntity.overallTotal);
            const leagueSlot = await repositoryGateway.insertOne(leagueSlotEntity.toObject());
            // save all of the participants.
            await Promise.all(participants.map((participant) => createLeagueParticipants(leagueSlot, {
                pokemon: participant.pokemon,
                trainer: participant.trainer
            })));
            // could enhance more here like if there's any error, revert the action.
            return leagueSlot;
        }
    };
};
exports.makeLeagueSlotCreateUsecase = makeLeagueSlotCreateUsecase;
//# sourceMappingURL=create.js.map