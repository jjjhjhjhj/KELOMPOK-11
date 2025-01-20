const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rute API untuk produk
router.get('/products', productController.getAllProducts);
router.post('/products', productController.addProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
