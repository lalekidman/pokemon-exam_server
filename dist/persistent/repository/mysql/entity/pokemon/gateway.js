"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonRepositoryGateway = void 0;
const mysql_1 = require("@app/common/gateway/repository/services/mysql");
const entity_1 = require("./entity");
class PokemonRepositoryGateway extends mysql_1.MySQLRepositoryGatewayService {
    constructor() {
        super(entity_1.PokemonRepositoryEntity);
    }
}
exports.PokemonRepositoryGateway = PokemonRepositoryGateway;
//# sourceMappingURL=gateway.js.map