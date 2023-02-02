"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonRepositoryGateway = void 0;
const constants_1 = require("@app/common/constants");
const mysql_1 = require("@app/common/gateway/repository/services/mysql");
const entity_1 = require("./entity");
class PokemonRepositoryGateway extends mysql_1.MySQLRepositoryGatewayService {
    constructor() {
        super(entity_1.PokemonRepositoryEntity, constants_1.TABLE_NAMES.POKEMON);
    }
    /**
     * by data by id
     * @param id
     */
    async findOne(query) {
        console.log('aaaaaaaaaa.generateQuery(query) :>> ', this.generateQuery(query));
        console.log('this.gxxxxenerateQuery(query) :>> ', query);
        return this.repository.createQueryBuilder()
            .select(this.tableName)
            .from(entity_1.PokemonRepositoryEntity, this.tableName)
            .leftJoinAndSelect("pokemon.pokemonStats", constants_1.TABLE_NAMES.POKEMON_STATS)
            .where(this.generateQuery(query), query)
            .getOne();
    }
}
exports.PokemonRepositoryGateway = PokemonRepositoryGateway;
//# sourceMappingURL=gateway.js.map