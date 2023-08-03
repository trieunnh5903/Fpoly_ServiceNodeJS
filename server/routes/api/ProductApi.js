const express = require('express');
const router = express.Router();
const productController = require('../../components/products/ProductController');

// http://localhost:3000/api/product
router.get('/', async function (req, res, next) {
    try {
        const { idCategory, id, searchKey } = req.query;
        if (idCategory) {
            const products = await productController.getProductByCategory(idCategory);
            return res.status(200).json(products);
        }

        if (id) {
            const products = await productController.getProductBuyId(id);
            return res.status(200).json(products);
        }
    } catch (error) {
        res.status(400).json({});
    }
});


router.get('/search', async (req, res, next) => {
    try {
        const { q } = req.query;
        const product = await productController.search(q);
        res.status(200).json( product );
    } catch (error) {
        res.status(400).json({});
    }
})

// http://localhost:3000/api/product


module.exports = router;