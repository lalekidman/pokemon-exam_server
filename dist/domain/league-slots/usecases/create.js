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
            const { participants, type } = dataInput;
            // could add limit here?
            const leagueSlotEntity = new entity_1.LeagueSlotsEntity({
                league: league.id,
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
                leagueSlotEntity.totalAttack += pokemon.pokemonStats.attack;
                leagueSlotEntity.totalDefense += pokemon.pokemonStats.defense;
                leagueSlotEntity.totalSpeed += pokemon.pokemonStats.speed;
            }
            console.log('leagueSlotEntity :>> ', leagueSlotEntity);
            // validate the maximum stats allowed
            await validatePokemonMaximumStats(league, leagueSlotEntity.overallTotal);
            const leagueSlot = await repositoryGateway.insertOne(leagueSlotEntity.toObject());
            try {
                // save all of the participants.
                for (const participant of participants) {
                    await createLeagueParticipants(leagueSlot, {
                        type,
                        pokemon: participant.pokemon,
                        trainer: participant.trainer
                    });
                }
                // await Promise.all(participants.map((participant) => createLeagueParticipants(leagueSlotEntity, {
                //   type,
                //   pokemon: participant.pokemon,
                //   trainer: participant.trainer
                // })))
                return leagueSlot;
            }
            catch (error) {
                // will not work since one participants got created. unless I'll remove it too.
                repositoryGateway.removeOne({ id: leagueSlot.id });
                throw error;
            }
            // could enhance more here like if there's any error, revert the action.
        }
    };
};
exports.makeLeagueSlotCreateUsecase = makeLeagueSlotCreateUsecase;
//# sourceMappingURL=create.js.map