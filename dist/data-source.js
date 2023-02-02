"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const entity_1 = require("./persistent/repository/mysql/entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 5506,
    username: "root",
    password: "admin",
    database: "pokemon_exam",
    synchronize: true,
    logging: false,
    entities: [
        entity_1.TrainerRepositoryEntity,
        entity_1.PokemonRepositoryEntity,
        entity_1.PokemonStatsRepositoryEntity,
        entity_1.LeagueRepositoryEntity,
        entity_1.LeagueSlotRepositoryEntity,
        entity_1.LeagueParticipantsRepositoryEntity,
    ],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map