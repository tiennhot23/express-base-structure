/* eslint-disable import/extensions */
/* eslint-disable no-console */
import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import ConnectRedis from 'connect-redis';

import { redis, mongo } from './src/services/index.js';

const {
  REDIS_URL,
  SESSION_ID,
  SESSION_SECRET,
  SESSION_TTL,
} = process.env;

const RedisStore = ConnectRedis(session);
mongo.connect();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    name: SESSION_ID,
    saveUninitialized: true, // save a "uninitialized" session (new session but dont have data to save) to the store
    // save session to store even if the session was never modified,
    // set to false if the store has implement the `touch` method (RedisStore does)
    resave: false,
    cookie: {
      secure: false, // cookie can be sent only via HTTPS (app.set('trust proxy', 1) if use nodejs)
      httpOnly: true, // minimizes the risk of client-side scripts access cookie. `document.cookie`
    },
    store: new RedisStore({
      client: redis,
      url: REDIS_URL,
      ttl: SESSION_TTL, // second
    }),
    // genid(req) {
    //   return yourGenSessionIDFunction(); // Provide a function that returns a session ID
    // },
    // /**
    //  * reset expiration to maxAge on every response
    //  * if saveUninitialized option is false, the cookie will not be set on a response with an uninitialized session.
    //  */
    // rolling: true,
  }),
);

app.use('/', async (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  res.status(err.status).json({ status: 'error', message: 'the url you are trying to reach is not hosted on our server' });
  next(err);
});

export default app;
