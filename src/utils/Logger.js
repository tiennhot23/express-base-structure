/* eslint-disable class-methods-use-this */
const fs = require('fs');
const logger = require('npmlog');

const logDir = 'logs';

class Logger {
  constructor() {
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }
  }

  log(level, message, ...args) {
    const extras = args.map(v => JSON.stringify(v));
    logger.log(level, (new Date()).toISOString(), message, extras);
  }

  info(message, ...args) {
    this.log('info', message, ...args);
  }

  debug(message, ...args) {
    this.log('debug', message, ...args);
  }

  warn(message, ...args) {
    this.log('warn', message, ...args);
  }

  error(message, ...args) {
    this.log('error', message, ...args);
  }
}

module.exports = Logger;
