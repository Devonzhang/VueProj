var express = require('express');
var port = 8088;

var app = express();

var router = express.Router();

router.get('/', function(req, res, next) {
    req.url = '/index.html';
    next();
})

app.use(router);

// 1. 读取json数据
// 新版脚手架工具取消了dev.server文件目录，将dev-server.js与webpack.dev.conf.js合并了


var goods = require('./data/01-商品页(点菜).json');
var ratings = require('./data/02-商品页(评价).json');
var seller = require('./data/03-商品页(商家).json');



// 2. 路由
var routes = express.Router();

// 3. 编写接口
routes.get('/goods', (req, res) => {
    res.json(goods);

})
routes.get('/ratings', (req, res) => {
    res.json(ratings);

})
routes.get('/seller', (req, res) => {
    res.json(seller);

})

//  4. 中间件
app.use('/api', routes);
