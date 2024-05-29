require('dotenv').config();

const redisHost = process.env.REDIS_HOST;
const redisPort = process.env.REDIS_PORT;
const redisPassword = process.env.REDIS_PASSWORD;

module.exports = {
  redisHost,
  redisPort,
  redisPassword
};
