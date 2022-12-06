/* eslint-disable class-methods-use-this */
import fs from 'fs';
import logger from 'npmlog';

const logDir = 'logs';

class Logger {
  constructor() {
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }
  }

  log(message, level) {
    logger.log(level || 'info', new Date(), message);
  }
}

export default Logger;
