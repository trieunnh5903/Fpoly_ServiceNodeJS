
const productService = require('./ProductService');

const getAllProducts = async () => {
    return await productService.getAllProducts();
}

const deleteProductById = async (id) => {
    return await productService.deleteProductById(id);
}

const updateProduct = async (id, name, price, quantity, image, category) => {
    return await productService.updateProduct(id, name, price, quantity, image, category);
}

const getProductBuyId = async (id) => {
    return await productService.getProductBuyId(id) ;
}
// const updateProductById = async(id)
const addNewProduct = async (name, price, quantity, image, category) => {
    return await productService.addNewProduct(name, price, quantity, image, category);
}
module.exports = { getAllProducts, deleteProductById, addNewProduct, updateProduct, getProductBuyId };