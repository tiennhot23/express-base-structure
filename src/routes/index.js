const express = require('express');

const baseRouter = require('./base');

const routing = express();

routing.use('/', baseRouter);

module.exports = routing;
