'use strict';

const ROUTER = require('express').Router();
ROUTER.use('/api', require('./api'));

module.exports = ROUTER;
