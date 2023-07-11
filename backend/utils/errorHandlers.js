const PrettyError = require('pretty-error');
const AppError = require('../utils/appError.js');
const pe = new PrettyError();

// Handling DB Cast Errors(Invalid fields)
const handleCastError = (err) => {
  const msg = `Inavalid ${err.path} with the value of ${err.value}`;

  return new AppError(msg, 400);
};

// Handling DB Duplicate Fields Errors
const handleDuplicateKeyError = (err) => {
  const value = Object.values(err.keyValue)[0];
  const msg = `Duplicate field value: ${value}. Please use another value`;

  return new AppError(msg, 400);
};

// Handling DB Validation Errors
const handleValidationError = (err) => {
  return new AppError(err.message, 400);
};

// Callback to send Development Errors
const sendErrDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

// Callback to send Production Errors
const sendErrProd = (err, res) => {
  console.log(pe.render(err));

  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong!',
    });
  }
};

module.exports = (err, req, res, next) => {
  //console.log(err.stack);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    error.message = err.message;

    if (err.name === 'CastError') error = handleCastError(error);
    if (err.code === 11000) error = handleDuplicateKeyError(error);
    if (err.name === 'ValidationError') error = handleValidationError(error);

    sendErrProd(error, res);
  }
};
