"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
// import { User } from "@app/persistent/repository/mysql/entity"
data_source_1.AppDataSource.initialize().then(async () => {
    // const UserRepository = AppDataSource.getRepository(User)
    // UserRepository.
    console.log("connected to the database");
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)
    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)
    // console.log("Here you can setup and run express / fastify / any other framework.")
}).catch(error => console.log(error));
//# sourceMappingURL=mysql.js.map