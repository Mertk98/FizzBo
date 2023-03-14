const express = require('express');

const propertyRouter = require('./routes/propertyRoutes');

const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use('/api/v1/properties', propertyRouter);

module.exports = app;
