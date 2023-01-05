const express = require("express");
const catgoryController = require("../controller/category.controller");
const uploadService = require("../../utils/upload-service/upload");
const categoryMiddleware = require("../../../middlewares/category/category.middleware");

const router = express.Router();

router.post(
  "/create",
  categoryMiddleware.duplicateCategory,
  uploadService.singleImageUpload,
  catgoryController.createCategory
);

module.exports = router;
