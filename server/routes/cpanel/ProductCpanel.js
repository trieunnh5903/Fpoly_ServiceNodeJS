const express = require('express');
const router = express.Router();
const productController = require('../../components/products/ProductController');
const categoryController = require('../../components/category/CategoryController');
const uploadImage = require('../../middleware/UploadImage');
const IP = require('../../config/ip');

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
    const categories = await categoryController.getAllCategories();
    res.render('product/form', { categories });
});

router.post('/new', [uploadImage.single('image'),], async function (req, res, next) {

    try {
        let { body, file } = req;
        if (file) {
            // console.log("file is not null");
            let image = `http://${IP}:3000/images/${file.filename}`;
            body = { ...body, image: image }
        }
        let { name, price, quantity, image, category } = body;
        // console.log(">>>>>>>>>>>>>>>>>> add param" + name, image);

        await productController.addNewProduct(name, price, quantity, image, category);
        return res.render('product/form')
    } catch (error) {
        console.log(error)
    }
});


// http://localhost:3000/cpanel/product/:id/edit 
router.get('/:id/edit', async function (req, res, next) {
    try {
        const { id } = req.params;
        const product = await productController.getProductBuyId(id);
        const categories = await categoryController.getAllCategories();
        categories.forEach(element => {
            element.selected = false;
            if (element._id == product.category) {
                element.selected = true;
            }
        });
        res.render('product/edit', { categories, product });
    } catch (error) {
        next(error);
    }
});

router.post('/:id/edit', [uploadImage.single('image'),], async function (req, res, next) {
    try {
        let { id } = req.params;
        let { body, file } = req;
        if (file) {
            let image = `http://${IP}:3000/images/${file.filename}`;
            body = { ...body, image: image }
        }
        let { name, price, quantity, image, category } = body;
        // console.log(">>>>>>>>>>>>>>>>>> add param" + name, image);

        await productController.updateProduct(id, name, price, quantity, image, category);
        return res.render('product/edit');
    } catch (error) {
        console.log(error)
        next(error)
    }
});


module.exports = router;