"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonStatsRepositoryGateway = void 0;
const constants_1 = require("@app/common/constants");
const mysql_1 = require("@app/common/gateway/repository/services/mysql");
const entity_1 = require("./entity");
class PokemonStatsRepositoryGateway extends mysql_1.MySQLRepositoryGatewayService {
    constructor() {
        super(entity_1.PokemonStatsRepositoryEntity, constants_1.TABLE_NAMES.POKEMON_STATS);
    }
}
exports.PokemonStatsRepositoryGateway = PokemonStatsRepositoryGateway;
//# sourceMappingURL=gateway.js.map