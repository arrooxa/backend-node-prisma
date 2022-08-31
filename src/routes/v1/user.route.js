const express = require("express");

// TODO: Implement validation

const UserController = require("../../controllers/UserController");

const router = express.Router();

router.get("/getall", UserController.getAllUsers);
router.get("/get", UserController.getUserInfo);

module.exports = router;
