const productService = require('./ProductService');

const getAllProducts = async()=> {
    return await productService.getAllProducts();
}

const deleteProductById = async (id) => {
    return await productService.deleteProductById(id);
}
module.exports = {getAllProducts, deleteProductById};