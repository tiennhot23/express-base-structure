module.exports = {
  port: process.env.DB_PORT || 27017,
  database: process.env.DB_NAME || 'database',
  password: process.env.DB_PASS || 'password',
  username: process.env.DB_USER || 'mongodb',
  host: process.env.DB_HOST || '127.0.0.1',
  dialect: 'mongodb',
  connectionString: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/test',
  options: {

  },
};
