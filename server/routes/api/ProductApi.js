const express = require('express');
const router = express.Router();
const productController = require('../../components/products/ProductController');

// http://localhost:3000/api/product
router.get('/', async function (req, res, next) {
    try {
        const { idCategory } = req.query;
        const products = await productController.getProductByCategory(idCategory);
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({});
    }
});

router.get('/search', async (req, res, next) => {
    try {
        const { keyword } = req.query;
        const product = await productController.search(keyword);
        res.status(200).json({ product });
    } catch (error) {
        res.status(400).json({});
    }
})

// http://localhost:3000/api/product


module.exports = router;