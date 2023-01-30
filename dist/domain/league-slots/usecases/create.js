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
                league: league._id,
                type
            });
            const size = await repositoryGateway.count({
                league: leagueSlotEntity.league
            });
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
            // validate the maximum stats allowed
            await validatePokemonMaximumStats(league, leagueSlotEntity.overallTotal);
            // save all of the participants.
            const pokemonParticipants = await Promise.all(participants.map((participant) => createLeagueParticipants(leagueSlotEntity, {
                pokemon: participant.pokemon,
                trainerId: participant.trainerId
            })));
            // then save it to the repository.
            // could enhance more here like if there's any error, revert the action.
            const leagueSlot = await repositoryGateway.insertOne(leagueSlotEntity.toObject());
            return leagueSlot;
        }
    };
};
exports.makeLeagueSlotCreateUsecase = makeLeagueSlotCreateUsecase;
//# sourceMappingURL=create.js.map