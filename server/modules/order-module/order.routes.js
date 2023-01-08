const express = require("express");
const orderController = require("./order.controller");

const router = express.Router();

router.post("/create", orderController.createOrder);

module.exports = router;
