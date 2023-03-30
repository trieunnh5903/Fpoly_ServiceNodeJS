const express = require('express');
const router = express.Router();
const productController = require('../../components/products/ProductController');

// http://localhost:3000/api/product
router.get('/', async function (req, res, next) {
    try {
        const products = await productController.getAllProducts();
        res.status(200).json({products});
    } catch (error) {
        res.status(400).json({});
    }
});

module.exports = router;