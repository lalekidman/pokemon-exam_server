"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueSlotRepositoryGateway = void 0;
const constants_1 = require("@app/common/constants");
const mysql_1 = require("@app/common/gateway/repository/services/mysql");
const entity_1 = require("./entity");
class LeagueSlotRepositoryGateway extends mysql_1.MySQLRepositoryGatewayService {
    constructor() {
        super(entity_1.LeagueSlotRepositoryEntity, constants_1.TABLE_NAMES.LEAGUE_SLOT);
    }
}
exports.LeagueSlotRepositoryGateway = LeagueSlotRepositoryGateway;
//# sourceMappingURL=gateway.js.map