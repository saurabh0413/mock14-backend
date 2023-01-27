const express = require("express");
const {
  loginController,
  randomController,
} = require("../controllers/user.controller");

const userRoute = express.Router();

userRoute.post("/login", loginController);
userRoute.get("/", randomController);
module.exports = { userRoute };
