const express = require('express');
const router = express.Router();
const productController = require('../../components/products/ProductController');
const categoryController = require('../../components/category/CategoryController');
const uploadImage = require('../../middleware/UploadImage');
const IP = require('../../config/ip');
const auth = require('../../middleware/Authentication');
// http://localhost:3000/cpanel/product/list-product
router.get('/list-product', [auth.authenWeb],  async function (req, res, next) {
    const products = await productController.getAllProducts();
    res.render('list-product', { products });
});

// http://localhost:3000/cpanel/product/:id/delete
router.get('/:id/delete', [auth.authenWeb], async function (req, res, next) {
    try {
        const { id } = req.params;
        await productController.deleteProductById(id);
        return res.json({ status: true })
    } catch (error) {
        return res.json({ status: false })
    }
});

// http://localhost:3000/cpanel/product/new 
router.get('/new',[auth.authenWeb], async function (req, res, next) {
    const categories = await categoryController.getAllCategories();
    res.render('insert', { categories });
});

router.post('/new', [ uploadImage.single('image'),], async function (req, res, next) {

    try {
        let { body, file } = req;
        if (file) {
            // console.log("file is not null");
            let image = `http://${IP}:3000/images/${file.filename}`;
            body = { ...body, image: image }
        }
        let { name, price, quantity, image, category } = body;
        console.log(">>>>>>>>>>>>>>>>>> add param" + category);

        await productController.addNewProduct(name, price, quantity, image, category);
        return res.render('insert')
    } catch (error) {
        console.log(error)
    }
});


// http://localhost:3000/cpanel/product/:id/edit 
router.get('/:id/edit', [auth.authenWeb], async function (req, res, next) {
    try {
        const { id } = req.params;
        const product = await productController.getProductBuyId(id);
        const categories = await categoryController.getAllCategories();
        console.log("????????????????? " + product.category);
        for (let index = 0; index < categories.length; index++) {
            let element = categories[index];
            if (element._id.toString() == product.category.toString()) {
                element.selected = true;
            } else {
                element.selected = false;
            }

        }
        res.render('list-product', { categories, product });
    } catch (error) {
        next(error);
    }
});

router.post('/:id/edit', [ uploadImage.single('image'),], async function (req, res, next) {
    try {
        let { id } = req.params;
        let { body, file } = req;
        if (file) {
            let image = `http://${IP}:3000/images/${file.filename}`;
            body = { ...body, image: image }
        }
        let { name, price, quantity, image, category } = body;
        await productController.updateProduct(id, name, price, quantity, image, category);
        return res.render('edit');
    } catch (error) {
        console.log(error)
        next(error)
    }
});


module.exports = router;