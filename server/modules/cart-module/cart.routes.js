const express = require("express");
const cartController = require("./cart.controller");

const router = express.Router();

router.post("/addtocart", cartController.createCart, cartController.updateCart);
router.post("/getcartdetail", cartController.getCart);

module.exports = router;
