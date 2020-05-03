'use strict';

const Install = require("../utils/Install");
const GetSize = require("../utils/GetSize");
const Minify = require("../utils/Minify");

let MainController = {
    install: function(request, response, next) {
        Install(request.query.search)
        .then((data) => response.status(201).send(data))
        .catch(next);
    },
    size: function(request, response, next) {
        GetSize(request.query.search)
        .then(data => response.status(201).send(data))
        .catch(next);
    },
    /* minify: function(request, response, next) {
        Minify(request.query.search)
        .then(data => response.status(201).send(data))
        .catch(next);
    } */
};

module.exports = MainController;
