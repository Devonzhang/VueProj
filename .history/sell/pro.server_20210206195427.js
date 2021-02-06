var express = require('express');
var port = 8088;

var app = express();

var router = express.Router();

router.get('/', function(req, res, next) {
    req.url = '/index.html';
    next();
})

app.use(router);
