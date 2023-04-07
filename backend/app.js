const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const propertyRouter = require('./routes/propertyRoutes');

const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan());

app.use('/api/v1/properties', propertyRouter);

module.exports = app;
