module.exports = {
  connectionString: process.env.REDIS_URL,
  ttl: process.env.CACHE_TTL,
};
