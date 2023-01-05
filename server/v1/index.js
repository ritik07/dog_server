const express = require("express");
const authRoutes = require("../modules/auth-module/routes/auth.routes");
const cateogryRoutes = require("../modules/category-module/routes/category.routes");
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/category", cateogryRoutes);

module.exports = router;
