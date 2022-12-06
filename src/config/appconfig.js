import 'dotenv/config';

export default {
  app: {
    port: process.env.APP_PORT || 3000,
    appName: process.env.APP_NAME || 'appname',
    env: process.env.NODE_ENV || 'dev',
  },
  db: {
    port: process.env.DB_PORT || 27017,
    database: process.env.DB_NAME || 'database',
    password: process.env.DB_PASS || 'password',
    username: process.env.DB_USER || 'mongodb',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mongodb',
  },
  logger: {
    logpath: 'logs/',
  },
  auth: {
    jwt_secret: process.env.JWT_SECRET,
    jwt_ttl: process.env.JWT_TTL || '1d',
    saltRounds: process.env.SALT_ROUND || 10,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET || 'VmVyeVBvd2VyZnVsbFNlY3JldA==',
    refresh_token_ttl: process.env.REFRESH_TOKEN_TTL || '2d',
  },
};
