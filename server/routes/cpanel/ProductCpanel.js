const express = require('express');
const router = express.Router();
const productController = require('../../components/products/ProductController');
const categoryController = require('../../components/category/CategoryController');
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

// http://localhost:3000/cpanel/product/new 
router.get('/new', async function (req, res, next) {
    const categories =await categoryController.getAllCategories();
    console.log(">>>>>>>>>>>>>>>>>>" + categories[0].name);
    res.render('product/form', {categories});
});

router.post('/new', async function (req, res, next) {
    let {name, price, quantity, image, category} = req.body
    image = 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_12.png'
    try {
        await productController.addNewProduct(name, price, quantity, image, category);
        return res.render('product/form')
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;