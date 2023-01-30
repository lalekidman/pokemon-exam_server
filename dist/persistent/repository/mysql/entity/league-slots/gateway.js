"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueSlotRepositoryGateway = void 0;
const mysql_1 = require("@app/common/gateway/repository/services/mysql");
const entity_1 = require("./entity");
class LeagueSlotRepositoryGateway extends mysql_1.MySQLRepositoryGatewayService {
    constructor() {
        super(entity_1.LeagueSlotRepositoryEntity);
    }
}
exports.LeagueSlotRepositoryGateway = LeagueSlotRepositoryGateway;
//# sourceMappingURL=gateway.js.map