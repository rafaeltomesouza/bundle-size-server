'use strict';

const debug = require('debug')('sexta:bin:www')
const app = require('../app');

app.listen(7001, function() {
    debug('app running');
});
