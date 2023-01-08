const express = require("express");
const authRoutes = require("../modules/auth-module/auth.routes");
const cateogryRoutes = require("../modules/category-module/category.routes");
const productRoutes = require("../modules/product-module/product.routes");
const cartRoutes = require("../modules/cart-module/cart.routes");
const userRoutes = require("../modules/user-module/user.session.routes");
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/category", cateogryRoutes);
router.use("/product", productRoutes);
router.use("/cart", cartRoutes);
router.use("/usersession", userRoutes);

module.exports = router;
