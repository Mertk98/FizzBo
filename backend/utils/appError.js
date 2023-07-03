class AppError extends Error {
  constructor(message, code) {
    super(message);
    this.statusCode = code;
    this.status = `${code}`.startsWith('4') ? 'fail' : 'error';
    this.isOp = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
