const express = require('express');
const router = express.Router();
const productController = require('../../components/products/ProductController');

// http://localhost:3000/cpanel/product/list-product
router.get('/list-product', async function (req, res, next) {
    const products = await productController.getAllProducts();
    res.render('product/table', { products });
});

// http://localhost:3000/cpanel/product/:id/delete
router.get('/:id/delete', async function (req, res, next) {
    try {
        const { id } = req.params;
        await productController.deleteProductById(id);
        return res.json({ status: true })
    } catch (error) {
        return res.json({ status: false })
    }
});
module.exports = router;