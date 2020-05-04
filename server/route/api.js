'use strict';

const router = require('express').Router();
const MainController = require('../controller/MainController');

router.get('/install', MainController.install);
router.get('/size', MainController.size);
//router.get('/minify', MainController.minify);

module.exports = router;
