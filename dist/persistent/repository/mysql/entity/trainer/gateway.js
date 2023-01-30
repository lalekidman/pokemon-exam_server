"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainerRepositoryGateway = void 0;
const mysql_1 = require("@app/common/gateway/repository/services/mysql");
const entity_1 = require("./entity");
class TrainerRepositoryGateway extends mysql_1.MySQLRepositoryGatewayService {
    constructor() {
        super(entity_1.TrainerRepositoryEntity);
    }
}
exports.TrainerRepositoryGateway = TrainerRepositoryGateway;
//# sourceMappingURL=gateway.js.map