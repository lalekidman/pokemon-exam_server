"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainerRepositoryGateway = void 0;
const mysql_1 = require("@app/common/gateway/repository/services/mysql");
const data_source_1 = require("@app/data-source");
const entity_1 = require("./entity");
const TrainerRepository = data_source_1.AppDataSource.getRepository(entity_1.Trainer);
class TrainerRepositoryGateway extends mysql_1.MySQLRepositoryGatewayService {
    constructor() {
        super(TrainerRepository);
    }
    async insertOne(data) {
        const trainer = new entity_1.Trainer();
        trainer.firstName = data.firstName;
        trainer.lastName = data.lastName;
        trainer.createdAt = data.createdAt;
        trainer.updatedAt = data.updatedAt;
        await TrainerRepository.save(trainer);
        return trainer;
    }
    async updateById(id, data) {
        const trainer = await TrainerRepository.findOneBy({
            id
        });
        if (trainer) {
            data.firstName ? trainer.firstName = data.firstName : null;
            data.lastName ? trainer.lastName = data.lastName : null;
            trainer.updatedAt = Date.now();
            await TrainerRepository.save(trainer);
        }
        return trainer;
    }
    async updateOne(query, data) {
        const trainer = await TrainerRepository.findOneBy(query);
        if (trainer) {
            data.firstName ? trainer.firstName = data.firstName : null;
            data.lastName ? trainer.lastName = data.lastName : null;
            trainer.updatedAt = Date.now();
            await TrainerRepository.save(trainer);
        }
        return trainer;
    }
}
exports.TrainerRepositoryGateway = TrainerRepositoryGateway;
//# sourceMappingURL=gateway.js.map