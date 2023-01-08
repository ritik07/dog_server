const express = require("express");
const catgoryController = require("./category.controller");
const categoryMiddleware = require("../../middlewares/category.middleware");
const { postFile } = require("../utils/upload-service/mutler.service");

const router = express.Router();

router.post(
  "/create",
  postFile,
  categoryMiddleware.duplicateCategory,
  catgoryController.createCategory
);

module.exports = router;
