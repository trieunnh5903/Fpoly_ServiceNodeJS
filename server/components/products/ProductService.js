const productModel = require('./ProductModel');

const getAllProducts = async (size, page) => {
    try {
        return await productModel.find();
    } catch (error) {
        console.log("getAllProducts: ", error);
    }
    return [];
};

const deleteProductById = async (id) => {
    try {
        await productModel.findByIdAndDelete(id);
        return true;
    } catch (error) {
        console.log("deleteProductById: ", error);
    }
    return false;
};

// lay thong tin san pham theo id

const getProductBuyId = async (id) => {
    try {
        let product = await productModel.findById(id);
        return product;
    } catch (error) {
        console.log("getProductBuyId error:  " + error);
    }
    return null;
}

const updateProduct = async (id, name, price, quantity, image, category) => {
    try {
        let item = await productModel.findById(id);
        if (item) {
            item.category = category ? category : item.category;
            item.image = image ? image : item.image;
            item.name = name ? name : item.name;
            item.price = price ? price : item.price;
            item.quantity = quantity ? quantity : item.quantity;
            await item.save();
            return true;
        }
    } catch (error) {
        console.log("updateProduct error: " + error);
    }
    return false;
}

const addNewProduct = async (name, price, quantity, image, category) => {
    try {
        const newProduct = {
            name,
            price,
            quantity,
            image,
            category
        }
        await productModel.create(newProduct);
        return true;
    } catch (error) {
        console.log("addNewProduct: " + error)
    }
    return false;
}
module.exports = { getAllProducts, deleteProductById, addNewProduct, updateProduct, getProductBuyId }
