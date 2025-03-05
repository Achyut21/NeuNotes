// src/utils/cache.js
import { createClient } from "redis";

const redisClient = createClient();

redisClient.on("error", (err) => {
  console.error("Redis Client Error", err);
});

// Connect to Redis (ensure your Redis server is running)
await redisClient.connect();

export const getCache = async (key) => {
  const data = await redisClient.get(key);
  return data ? JSON.parse(data) : null;
};

export const setCache = async (key, value, expireInSeconds = 3600) => {
  await redisClient.set(key, JSON.stringify(value), { EX: expireInSeconds });
};

export default redisClient;