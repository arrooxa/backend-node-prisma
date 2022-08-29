const express = require("express");
const router = express.Router();

const rbacFilter = require("../middlewares/rbac");

const { getAllUsers, getUserInfo } = require("../controllers/UsersControllers");
const verifyJWT = require("../middlewares/token");

router.get("/getall", rbacFilter, getAllUsers);

router.get("/get", verifyJWT, getUserInfo);

module.exports = router;
