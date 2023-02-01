import "reflect-metadata"
import { DataSource } from "typeorm"
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
    username: "root",
    password: "admin54321",
    database: "pokemon_exam",
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
