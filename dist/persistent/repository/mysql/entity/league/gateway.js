"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueRepositoryGateway = void 0;
const constants_1 = require("@app/common/constants");
const mysql_1 = require("@app/common/gateway/repository/services/mysql");
const entity_1 = require("./entity");
class LeagueRepositoryGateway extends mysql_1.MySQLRepositoryGatewayService {
    constructor() {
        super(entity_1.LeagueRepositoryEntity, constants_1.TABLE_NAMES.LEAGUE);
    }
}
exports.LeagueRepositoryGateway = LeagueRepositoryGateway;
//# sourceMappingURL=gateway.js.map