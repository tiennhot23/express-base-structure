/* eslint-disable no-console */
require('dotenv').config();
const app = require('./app');

const configs = require('./src/configs');

const port = configs.appPort;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

const unexpectedErrorHandler = error => {
  logger.error(`UNEXPECTED ERROR::${error.message}`, error);
  process.exit(1);
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => { logger.info('SIGTERM received'); });
