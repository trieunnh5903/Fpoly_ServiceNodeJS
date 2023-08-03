
const productService = require('./ProductService');

const addNewProduct = async (name, price, quantity, image, category) => {
    return await productService.addNewProduct(name, price, quantity, image, category);
}

const getAllProducts = async () => {
    return await productService.getAllProducts();
}

const getProductBuyId = async (id) => {
    return await productService.getProductBuyId(id);
}

const getProductByCategory = async (idCategory) => {
    return await productService.getProductBuyCategory(idCategory);
}
const updateProduct = async (id, name, price, quantity, image, category) => {
    return await productService.updateProduct(id, name, price, quantity, image, category);
}

const deleteProductById = async (id) => {
    return await productService.deleteProductById(id);
}

const search = async (keyword) => {
    return await productService.search(keyword);
}

module.exports = { getAllProducts, deleteProductById, addNewProduct, updateProduct, getProductBuyId, search, getProductByCategory };