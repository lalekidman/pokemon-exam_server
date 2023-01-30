"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueParticipantCreateUsecase = void 0;
const league_participants_1 = require("@app/persistent/repository/mysql/entity/league-participants");
const create_1 = require("./create");
const repositoryGateway = new league_participants_1.LeagueParticipantsRepositoryGateway();
exports.LeagueParticipantCreateUsecase = (0, create_1.makeLeagueParticipantCreateUsecase)({
    repositoryGateway,
});
// league slot id.
// then
//# sourceMappingURL=index.js.map