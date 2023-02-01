"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueParticipantsRepositoryGateway = void 0;
const constants_1 = require("@app/common/constants");
const mysql_1 = require("@app/common/gateway/repository/services/mysql");
const entity_1 = require("./entity");
class LeagueParticipantsRepositoryGateway extends mysql_1.MySQLRepositoryGatewayService {
    constructor() {
        super(entity_1.LeagueParticipantsRepositoryEntity, constants_1.TABLE_NAMES.LEAGUE_PARTICIPANT);
    }
}
exports.LeagueParticipantsRepositoryGateway = LeagueParticipantsRepositoryGateway;
//# sourceMappingURL=gateway.js.map