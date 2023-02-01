"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLRepositoryGatewayService = void 0;
const data_source_1 = require("@app/data-source");
class MySQLRepositoryGatewayService {
    constructor(entity, tableName) {
        this.entity = entity;
        this.tableName = tableName;
        this.repository = data_source_1.AppDataSource.getRepository(entity);
    }
    generateQuery(query) {
        return Reflect.ownKeys(query).reduce((previousVal, key) => {
            if (previousVal !== "") {
                previousVal += " AND ";
            }
            return previousVal + `${this.tableName}.${key} = :${key}`;
        }, "");
    }
    /**
     * get list
     * @param query
     * @param queryParams
     */
    async list(query, options) {
        if (query) {
            return this.repository.createQueryBuilder()
                .select(this.tableName)
                .from(this.entity, this.tableName)
                .where(this.generateQuery(query), query)
                .getMany();
        }
        return this.repository.find();
    }
    /**
     * by data by id
     * @param id
     */
    async findOne(query) {
        return this.repository.createQueryBuilder()
            .select(this.tableName)
            .from(this.entity, this.tableName)
            .where(this.generateQuery(query), query)
            .getOne();
    }
    /**
     * insert data
     * @param data
     */
    // public abstract insertOne(data: T): Promise<T>
    async insertOne(data) {
        // const entity = await this.repository.findOneBy(query)
        const newEntity = new this.entity();
        let updated = false;
        const keys = Reflect.ownKeys(data);
        for (const key of keys) {
            if (typeof (key) === 'string') {
                // @ts-expect-error
                newEntity[key] = data[key];
                updated = true;
            }
        }
        await this.repository.save(newEntity);
        return newEntity;
    }
    /**
     * insert bulk/mutiple data
     * @param data
     */
    insertMany(data) {
        return Promise.all(data.map(elem => this.insertOne(elem)));
    }
    // public abstract updateById(id: string, data: IRepositoryUpdateProperties<T>): Promise<T|null>
    // public abstract updateOne(query: IRepositoryGatewayQuery<T>, data: IRepositoryUpdateProperties<T>): Promise<T|null>
    async updateOne(query, data) {
        const entity = await this.repository.findOneBy(query);
        if (entity) {
            let updated = false;
            const keys = Reflect.ownKeys(data);
            for (const key of keys) {
                if (typeof (key) === 'string') {
                    // @ts-expect-error
                    entity[key] = data[key];
                    updated = true;
                }
            }
            if (updated) {
                // @ts-expect-error
                entity.updatedAt = Date.now();
            }
            await this.repository.save(entity);
        }
        return entity;
    }
    async updateById(id, data) {
        const entity = await this.repository.findOneBy({
            id
        });
        if (entity) {
            let updated = false;
            const keys = Reflect.ownKeys(data);
            for (const key of keys) {
                if (typeof (key) === 'string') {
                    // @ts-expect-error
                    entity[key] = data[key];
                    updated = true;
                }
            }
            if (updated) {
                // @ts-expect-error
                entity.updatedAt = Date.now();
            }
            await this.repository.save(entity);
        }
        return entity;
    }
    async removeById(id) {
        const data = await this.repository.findOneBy({
            id
        });
        if (data) {
            const result = await this.repository.remove(data);
            if (result) {
                // added some validatio here.
            }
        }
        return data;
    }
    async removeOne(query) {
        const data = await this.repository.findOneBy(query);
        if (data) {
            const result = await this.repository.remove(data);
            if (result) {
                // added some validatio here.
            }
        }
        return data;
    }
    /**
     *
     * @param query
     * @returns
     */
    async remove(query) {
        const data = await this.repository.findOneBy(query);
        if (data) {
            const result = await this.repository.remove(data);
            if (result) {
                // added some validatio here.
            }
        }
        return !!data;
    }
    /**
     *
     * @param query
     * @returns
     */
    async count(query) {
        return this.repository.createQueryBuilder()
            .select(this.tableName)
            .from(this.entity, this.tableName)
            .where(this.generateQuery(query), query)
            .getCount();
    }
}
exports.MySQLRepositoryGatewayService = MySQLRepositoryGatewayService;
//# sourceMappingURL=mysql.js.map