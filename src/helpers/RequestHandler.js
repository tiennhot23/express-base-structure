/* eslint-disable class-methods-use-this */
class RequestHandler {
  constructor(logger) {
    this.logger = logger;
  }

  throwIf(fn, status, errorType, errorMessage) {
    return result => (fn(result) ? this.throwError(status, errorType, errorMessage) : result);
  }

  throwError(status, errorType, errorMessage) {
    const e = new Error(errorMessage || 'Default Error');
    e.status = status;
    e.errorType = errorType;
    throw e;
  }

  sendSuccess(res, message, status) {
    return (data, globalData) => {
      res.status(status || 200).json({
        status: 'success',
        message: message || 'Success result',
        ...globalData,
        data,
      });
    };
  }

  sendError(req, res, error) {
    this.logger.error(`Error during processing request: ${`${req.protocol}://${req.get('host')}${req.originalUrl}`} details message: ${error.message}`);
    return data => {
      res.status(error.status || 500).json({
        status: 'error',
        message: error.message || error.message || 'Unhandled Error',
        error,
        data,
      });
    };
  }
}

export default RequestHandler;
