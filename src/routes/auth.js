const express = require("express");
const { RegisterUser, LoginUser } = require("../controllers/AuthControllers");
const validate = require("../middlewares/validate");
const User = require("../validations/user.validation");

const router = express.Router();

router.post("/register", validate(User), RegisterUser);

router.post("/login", LoginUser);

module.exports = router;
