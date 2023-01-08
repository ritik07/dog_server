const express = require("express");
const productController = require("./product.controller");
const productMiddleware = require("../../middlewares/product.middleware");
const { postFile } = require("../utils/upload-service/mutler.service");

const router = express.Router();

router.post(
  "/create",
  postFile,
  productMiddleware.duplicateProduct,
  productController.createProduct
);

module.exports = router;
