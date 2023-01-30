"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueParticipantsRepositoryGateway = void 0;
const mysql_1 = require("@app/common/gateway/repository/services/mysql");
const entity_1 = require("./entity");
class LeagueParticipantsRepositoryGateway extends mysql_1.MySQLRepositoryGatewayService {
    constructor() {
        super(entity_1.LeagueParticipantsRepositoryEntity);
    }
}
exports.LeagueParticipantsRepositoryGateway = LeagueParticipantsRepositoryGateway;
//# sourceMappingURL=gateway.js.map