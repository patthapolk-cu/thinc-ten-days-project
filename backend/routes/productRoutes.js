const express = require("express");

const {
  getAllProductsInfo, getProductInfo, updateProductInfo, addProductInfo, getProductByTag, getProductByName, searchProducts
} = require("../controllers/productInfoControllers");

const router = express.Router();

router.route("/").get(getAllProductsInfo).post(addProductInfo);
router.route("/:productId").get(getProductInfo).put(updateProductInfo);
router.route("/tag/:tag").get(getProductByTag);
router.route("/name/:productName").get(getProductByName);
router.route("/querySearch/:query").get(searchProducts);

module.exports = router;