
const productService = require('./ProductService');

const getAllProducts = async()=> {
    return await productService.getAllProducts();
}

const deleteProductById = async (id) => {
    return await productService.deleteProductById(id);
}

const addNewProduct = async (name, price, quantity, image, category) => {
     await productService.addNewProduct(name, price, quantity, image, category)
}
module.exports = {getAllProducts, deleteProductById, addNewProduct};