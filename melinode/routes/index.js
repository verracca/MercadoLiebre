const express = require('express');
const router = express.Router();
const product= require ("../controller/product-controller")
const id= require ("../controller/idController")

/* GET home page. */

router.get('/api/items/:query', product.results)
router.get('/api/items/:id', id.results)


module.exports = router;
 