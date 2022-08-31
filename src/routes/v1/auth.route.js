const express = require("express");

const User = require("../../validations/user.validation");
const validate = require("../../middlewares/validate");

const AuthController = require("../../controllers/AuthController");

const router = express.Router();

router.post("/register", validate(User), AuthController.register)
router.get("/login", AuthController.login);

module.exports = router;
