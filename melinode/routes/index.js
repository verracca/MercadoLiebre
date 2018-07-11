var express = require('express');
var router = express.Router();
var product= require ("../controller/product-controller")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/items?q=:query', product.results)

module.exports = router;
 