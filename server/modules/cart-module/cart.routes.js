const express = require("express");
const cartController = require("./cart.controller");
const {
  createShoppingSession,
  getUserCartSession,
} = require("./cart.shoppingSession.controller");

const router = express.Router();

router.post("/create", createShoppingSession, cartController.createCart);

module.exports = router;
