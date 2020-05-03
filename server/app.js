'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const debug = require('debug')('bundle-size-server:server:app');
const cors = require('cors');

debug('app');

global.APP_ROOT = require('path').join(__dirname + '/../');
app.use(express.static(APP_ROOT + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use(function(request, response, next) {
    next();
});

app.use('/', require('./route'));

app.use(function(request, response, next){
    let err = new Error('not found');
    err.status = 404;
    next(err);
})

app.use(function(err, request, response, next){
    response.status(err.status || 500).send(err.message || 'server error');
})

module.exports = app;