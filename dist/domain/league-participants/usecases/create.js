"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLeagueParticipantCreateUsecase = void 0;
const league_slots_1 = require("@app/domain/league-slots");
const entity_1 = require("../entity");
const makeLeagueParticipantCreateUsecase = ({ repositoryGateway }) => {
    return class LeagueParticipantCreateUsecase {
        constructor() { }
        /**
         * to create league slots
         * @param dataInput
         * @returns
         */
        async execute(leagueSlot, dataInput) {
            const leagueParticipantEntity = new entity_1.LeagueParticipantEntity(Object.assign({}, dataInput));
            // need to check league slot entity.
            // if the league slot type is solo or pair.
            if (leagueSlot.type === league_slots_1.LEAGUE_SLOT_TYPE.SOLO) {
                // then check if the slot is already occupied.
                const occupied = await repositoryGateway.findOne({
                    leagueSlot: leagueSlot._id
                });
                if (occupied) {
                    throw new Error("the league slot is already occupied.");
                }
                // else save the data.
            }
            else if (leagueSlot.type === league_slots_1.LEAGUE_SLOT_TYPE.PAIR) {
                const participantsCount = await repositoryGateway.count({
                    leagueSlot: leagueSlot._id
                });
                if (participantsCount >= 2) {
                    throw new Error("the league slot is already occupied.");
                }
                // then check if the pair participants have the same pokemon,
                const samePokemonParticipant = await repositoryGateway.findOne({
                    leagueSlot: leagueSlot._id,
                    pokemon: leagueParticipantEntity.pokemon,
                    trainerId: leagueParticipantEntity.trainerId
                });
                if (samePokemonParticipant) {
                    // can't think a best error message, could enhance in the future based on the requirements.
                    throw new Error("same pokemon for a pair type is not allowed.");
                }
            }
            // how could I update this?
            // seems like I need to get the pokemon stats right? and
            // hmm. need to get the pokemon stats right?
            // then I need to get the stats right?
            // should also validate the maximum stats
            // then if all of the business usecase is good or pass, then just create the participant
            const leagueParticipant = await repositoryGateway.insertOne(leagueParticipantEntity.toObject());
            return leagueParticipant;
        }
    };
};
exports.makeLeagueParticipantCreateUsecase = makeLeagueParticipantCreateUsecase;
//# sourceMappingURL=create.js.map