const express = require("express");
const { RegisterUser, LoginUser } = require("../controllers/AuthControllers");
const validate = require("../middlewares/validate");
const createUser = require("../validations/user.validation");

const router = express.Router();

router.post("/register", validate(createUser), RegisterUser);

router.post("/login", LoginUser);

module.exports = router;
