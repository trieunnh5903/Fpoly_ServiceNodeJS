const express = require("express");
const router = express.Router();
const categoryController = require("../../components/category/CategoryController");

//localhost:3000/api/category
router.get("/", async (req, res, next) => {
  try {
    const categories = await categoryController.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({});
    console.log("localhost:3000/api/category: " + error);
  }
});

module.exports = router;
