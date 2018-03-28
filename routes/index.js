var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.set('X-XSS-Protection', 0) //设置浏览器不拦截xss
  res.render('index', { title: 'Express' });
});

module.exports = router;
