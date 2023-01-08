const express = require("express");
const {
  getCartSessionForUserSession,
} = require("../cart-session-module/cart.session.controller");
const { getUserSession } = require("./user.session.controller");

const router = express.Router();

router.get("/getcompletesession/:user_id", getCartSessionForUserSession, getUserSession);

module.exports = router;
