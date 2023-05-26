const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieSession = require('cookie-session');
const propertyRouter = require('./routes/propertyRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(helmet());
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:8080' }));
app.use(morgan());
app.use(
  cookieSession({
    name: 'fizzbo-session',
    secret: 'COOKIE-SECRET',
    httpOnly: true,
  })
);

app.use('/api/v1/properties', propertyRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
