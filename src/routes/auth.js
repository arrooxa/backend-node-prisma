const express = require("express");
const { RegisterUser } = require("../controllers/AuthControllers");

const router = express.Router();

router.post("/register", RegisterUser);

module.exports = router;
