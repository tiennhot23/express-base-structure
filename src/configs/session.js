const options = {
  secret: process.env.SESSION_SECRET,
  name: process.env.SESSION_ID,
  saveUninitialized: true, // save a "uninitialized" session (new session but dont have data to save) to the store
  // save session to store even if the session was never modified,
  // set to false if the store has implement the `touch` method (RedisStore does)
  resave: false,
  cookie: {
    secure: false, // cookie can be sent only via HTTPS (app.set('trust proxy', 1) if use nodejs)
    httpOnly: true, // minimizes the risk of client-side scripts access cookie. `document.cookie`
  },
  // genid(req) {
  //   return yourGenSessionIDFunction(); // Provide a function that returns a session ID
  // },
  // /**
  //  * reset expiration to maxAge on every response
  //  * if saveUninitialized option is false, the cookie will not be set on a response with an uninitialized session.
  //  */
  // rolling: true,
};

const ttl = process.env.SESSION_TTL;

module.exports = { options, ttl };
