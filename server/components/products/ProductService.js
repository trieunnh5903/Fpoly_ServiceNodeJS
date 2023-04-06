const productModel = require('./ProductModel');

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

const getAllProducts = async (size, page) => {
    try {
        return await productModel.find();
    } catch (error) {
        console.log("getAllProducts: ", error);
    }
    return [];
};

// lay thong tin san pham theo id
const getProductBuyId = async (id) => {
    try {
        let product = await productModel.findById(id).populate('category');
        return product;
    } catch (error) {
        console.log("getProductBuyId error:  " + error);
    }
    return null;
}

const getProductBuyCategory = async (idCategory) => {
    try {
        let products = await productModel.find({ category: idCategory }).exec();
        return products;
    } catch (error) {
        console.log("getProductBuyCategory error:  " + error);
    }
}

const deleteProductById = async (id) => {
    try {
        await productModel.findByIdAndDelete(id);
        return true;
    } catch (error) {
        console.log("deleteProductById: ", error);
    }
    return false;
};

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

const search = async (keyword) => {
    try {
        //gt: greater than, lt: less than, $lte: less then equal
        // AND: and
        // $or: [{quantity: {$lte: 100}}, {quantity:{$lt: 4000}}, ....{dieu kien}]
        // let query = {
        //     // price: { $gt: 1000, $lt: 4000 },
        //     //$regex: regular expression
        //     //$option: i:ignorekey
        //     name: { $regex: keyword, $option: 'i' }
        // }
        let product = await productModel.find({ name: { $regex: keyword, $options: "i"} });
        return product
    } catch (error) {
        console.log("search: " + error);
    }
}
module.exports = { getAllProducts, deleteProductById, addNewProduct, updateProduct, getProductBuyId, search, getProductBuyCategory }
