const express = require("express");
const authRoutes = require("../modules/auth-module/auth.routes");
const cateogryRoutes = require("../modules/category-module/category.routes");
const productRoutes = require("../modules/product-module/product.routes");
const cartRoutes = require("../modules/cart-module/cart.routes");
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/category", cateogryRoutes);
router.use("/product", productRoutes);
router.use("/cart", cartRoutes);

module.exports = router;
