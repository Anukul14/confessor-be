const HttpStatus = require('http-status');

/**
 * @extends Error
 */
class BaseError extends Error {
  constructor(message, data, status, isOperational = true, isPublic, isOverrideSuccess = false) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = this.constructor.name;
    this.message = message;
    this.status = status;
    this.isPublic = isPublic;
    this.isOperational = isOperational; // This is required since bluebird 4 doesn't append it anymore.
    this.data = data;
    this.isOverrideSuccess = isOverrideSuccess;

    Error.captureStackTrace(this);
  }
}

/**
 * ErrorHandler
 */
class ErrorHandler {

  handleError(err) {
    console.error(err);
    // TODO [Bhavya] : Dispatch notification if critical
  }

  isTrustedError(error) {
    return error instanceof BaseError && error.isOperational;
  }
}

module.exports = { BaseError, HttpStatus, ErrorHandler };
