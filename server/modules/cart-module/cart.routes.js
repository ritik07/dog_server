const express = require("express");
const cartController = require("./cart.controller");
const {
  createShoppingSession,
  getUserCartSession,
} = require("./cart.shoppingSession.controller");

const router = express.Router();

router.post("/create", createShoppingSession, cartController.createCart);
//initail cart for user
// router.get(
//   "/getcartsession/:user_id",
//   getUserCartSession,
//   cartController.getCartBySessionId
// );

module.exports = router;
