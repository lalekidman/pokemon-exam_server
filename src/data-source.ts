import "reflect-metadata"
import { DataSource } from "typeorm"
import { MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DATABASE_NAME } from "@app/common/constants"
import {
    LeagueParticipantsRepositoryEntity,
    LeagueRepositoryEntity,
    LeagueSlotRepositoryEntity,
    PokemonRepositoryEntity,
    PokemonStatsRepositoryEntity,
    TrainerRepositoryEntity,
} from "./persistent/repository/mysql/entity"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 5506,
    username: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE_NAME,
    synchronize: true,
    logging: false,
    entities: [
        TrainerRepositoryEntity,
        PokemonRepositoryEntity,
        PokemonStatsRepositoryEntity,
        LeagueRepositoryEntity,
        LeagueSlotRepositoryEntity,
        LeagueParticipantsRepositoryEntity,
    ],
    migrations: [],
    subscribers: [],
})
