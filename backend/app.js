const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieSession = require('cookie-session');
const AppError = require('./utils/appError.js');
const errorHandlers = require('./utils/errorHandlers.js');
const propertyRouter = require('./routes/propertyRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(helmet());
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:8080' }));
app.use(morgan('combined'));
app.use(
  cookieSession({
    name: 'fizzbo-session',
    secret: 'COOKIE-SECRET',
    httpOnly: true,
  })
);

app.use('/api/v1/properties', propertyRouter);
app.use('/api/v1/users', userRouter);
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(errorHandlers);

module.exports = app;
