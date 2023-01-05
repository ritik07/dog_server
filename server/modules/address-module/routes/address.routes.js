const express = require("express");
const addressController = require("../controller/address.controller");

const router = express.Router();

router.post("/address", addressController.Addaddress);

module.exports = router;
