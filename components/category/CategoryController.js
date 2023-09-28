const categoryService = require('./CategoryService');

const getAllCategories = async () => {
    try {
        return await categoryService.getAllCategories()
    } catch (error) {
        console.log("getAllCategories : " + error)
    }
}

module.exports = {getAllCategories};