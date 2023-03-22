const getAllProducts = async (size, page) => {
    try {
        return data;

    } catch (error) {
        console.log("getAllProducts: ", error);
    }
};

const deleteProductById = async (id) => {
    try {
        const index = data.findIndex(item => item._id == id)
        if (index >= 0) {
            data.splice(index, 1);
        }
    } catch (error) {
        console.log("deleteProductById: ", error);
        throw error;
    }

};

// lay thong tin san pham theo id

const getProductBuyId = async (id) => {
    try {
        let product = data.find(item => item._id == id);
        return product;
    } catch (error) {
        console.log("getProductBuyId error:  " + error);
        return null;
    }
}



const updateProduct = async (id, name, price, quantity, image, category) => {
    try {
        const product = data.find(item => item._id == id);
        if (product) {
            data = data.map(item => {
                if (item._id == id) {
                    item.category = category ? category : item.category;
                    item.image = image ? image : item.image;
                    item.name = name ? name : item.name;
                    item.price = price ? price : item.price;
                    item.quantity = quantity ? quantity : item.quantity;
                }
                return item;
            });
            return true;
        }
        return false;
    } catch (error) {
        console.log("updateProduct error: " + error);
        return false;
    }
}

const addNewProduct = async (name, price, quantity, image, category) => {
    try {
        const newProduct = {
            _id: data.length + 1,
            name,
            price,
            quantity,
            image,
            category
        }
        data.push(newProduct);
    } catch (error) {
        console.log("addNewProduct: " + error)
    }
}
module.exports = { getAllProducts, deleteProductById, addNewProduct, updateProduct, getProductBuyId }

var data = [{
    "_id": 1,
    "name": "Lyndsie",
    "price": 51,
    "quantity": 69,
    "image": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg",
    "category": 4
}, {
    "_id": 2,
    "name": "Omar",
    "price": 5,
    "quantity": 95,
    "image": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg",
    "category": 3
}, {
    "_id": 3,
    "name": "Avigdor",
    "price": 16,
    "quantity": 85,
    "image": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg",
    "category": 1
}, {
    "_id": 4,
    "name": "Dominique",
    "price": 79,
    "quantity": 60,
    "image": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg",
    "category": 1
}, {
    "_id": 5,
    "name": "Jameson",
    "price": 78,
    "quantity": 83,
    "image": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg",
    "category": 10
}, {
    "_id": 6,
    "name": "Clo",
    "price": 9,
    "quantity": 60,
    "image": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg",
    "category": 9
}, {
    "_id": 7,
    "name": "Maurits",
    "price": 69,
    "quantity": 99,
    "image": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg",
    "category": 10
}, {
    "_id": 8,
    "name": "Xenos",
    "price": 9,
    "quantity": 17,
    "image": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg",
    "category": 7
}, {
    "_id": 9,
    "name": "Alric",
    "price": 53,
    "quantity": 50,
    "image": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg",
    "category": 2
}, {
    "_id": 10,
    "name": "Melisandra",
    "price": 96,
    "quantity": 85,
    "image": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg",
    "category": 1
}, {
    "_id": 11,
    "name": "Nonie",
    "price": 76,
    "quantity": 31,
    "image": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg",
    "category": 7
}, {
    "_id": 12,
    "name": "Celestia",
    "price": 59,
    "quantity": 79,
    "image": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg",
    "category": 8
}, {
    "_id": 13,
    "name": "Kari",
    "price": 71,
    "quantity": 90,
    "image": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg",
    "category": 8
}, {
    "_id": 14,
    "name": "Emory",
    "price": 38,
    "quantity": 10,
    "image": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg",
    "category": 3
}, {
    "_id": 15,
    "name": "Allissa",
    "price": 60,
    "quantity": 9,
    "image": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg",
    "category": 2
}, {
    "_id": 16,
    "name": "Candida",
    "price": 21,
    "quantity": 26,
    "image": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg",
    "category": 6
}, {
    "_id": 17,
    "name": "Tallou",
    "price": 98,
    "quantity": 50,
    "image": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg",
    "category": 1
}, {
    "_id": 18,
    "name": "Guillaume",
    "price": 7,
    "quantity": 98,
    "image": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg",
    "category": 8
}, {
    "_id": 19,
    "name": "Suzi",
    "price": 25,
    "quantity": 90,
    "image": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg",
    "category": 1
}, {
    "_id": 20,
    "name": "Nelson",
    "price": 69,
    "quantity": 29,
    "image": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg",
    "category": 7
}]