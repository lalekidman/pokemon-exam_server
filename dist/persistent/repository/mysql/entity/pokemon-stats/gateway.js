"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonStatsRepositoryGateway = void 0;
const mysql_1 = require("@app/common/gateway/repository/services/mysql");
const entity_1 = require("./entity");
class PokemonStatsRepositoryGateway extends mysql_1.MySQLRepositoryGatewayService {
    constructor() {
        super(entity_1.PokemonStatsRepositoryEntity);
    }
}
exports.PokemonStatsRepositoryGateway = PokemonStatsRepositoryGateway;
//# sourceMappingURL=gateway.js.map