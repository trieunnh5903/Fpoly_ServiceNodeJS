
const categoryModel = require('./CategoryModel');
const getAllCategories = async () => {
    try {
        return categoryModel.find();
    } catch (error) {
        console.log("getAllCategories : " + error)
    }
}

module.exports = {getAllCategories};