var express = require("express");

var db = require("../db");
var controller = require("../controller/user.controller");
var validate = require("../validate/user.validate");
var authMiddleware = require("../middlewares/auth.middleware");

var router = express.Router();

router.get("/", authMiddleware.requireAuth, controller.index);

router.get("/search", controller.search);

router.get("/create", controller.create);

router.post("/create", validate.postCreate, controller.postCreate);

router.get("/:id", controller.viewUser);

module.exports = router;
