import RedisClient, {Redis} from 'ioredis'
const redisHost = `redis://${process.env.REDIS_HOST}` // use v3 redis
const redisClient = new RedisClient(redisHost);

export type IRedisClient = typeof redisClient;
export default {
  connect: () => {
    return new Promise((resolve, reject) => {
      redisClient.on('error', (err: Error) => {
        if (err) {
          reject(err)
          return
        }
      });
      redisClient.on('connect', (err: Error) => {
        if (err) {
          reject(err)
          return
        }
        console.log(`Connected to ${redisHost}.`);  ``
        resolve(redisClient)
      });
    }) as Promise<Redis>
  }
}