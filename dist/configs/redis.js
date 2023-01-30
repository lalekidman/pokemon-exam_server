"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const redisHost = `redis://${process.env.REDIS_HOST}`; // use v3 redis
const redisClient = new ioredis_1.default(redisHost);
exports.default = {
    connect: () => {
        return new Promise((resolve, reject) => {
            redisClient.on('error', (err) => {
                if (err) {
                    reject(err);
                    return;
                }
            });
            redisClient.on('connect', (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                console.log(`Connected to ${redisHost}.`);
                ``;
                resolve(redisClient);
            });
        });
    }
};
//# sourceMappingURL=redis.js.map