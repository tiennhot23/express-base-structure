/* eslint-disable import/extensions */
/* eslint-disable no-console */
require('dotenv').config();

const express = require('express');
const session = require('express-session');
const ConnectRedis = require('connect-redis');
const mongoose = require('mongoose');
const redis = require('ioredis');

const Logger = require('./src/utils/Logger');
const configs = require('./src/configs');
const { errorHandler, routeNotFoundHandler } = require('./src/middlewares');
const routing = require('./src/routes');

const RedisStore = ConnectRedis(session);
mongoose.connect(configs.mongo.connectionString, configs.mongo.options)
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.error('Error: MongoDB:::', err));

// global vars
global.logger = new Logger();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '200kb' }));
app.use(session({
  ...configs.session.options,
  store: new RedisStore({
    client: redis,
    url: configs.redis.connectionString,
    ttl: configs.session.ttl, // second
  }),
}));
app.use(routing);
app.use(routeNotFoundHandler);
app.use(errorHandler);

module.exports = app;
