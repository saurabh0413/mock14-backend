const express = require("express");
const { loginController } = require("../controllers/user.controller");

const userRoute = express.Router();

userRoute.post("/login", loginController);
// userRoute.get("/", getprofile);
module.exports = { userRoute };
