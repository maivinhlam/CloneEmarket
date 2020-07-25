var express = require("express");

var db = require("../db");
var controller = require("../controller/user.controlloer");
var validate = require("../validate/user.validate");

var router = express.Router();

router.get("/", controller.index);

router.get("/search", controller.search);

router.get("/create", controller.create);

router.post("/create", validate.postCreate, controller.postCreate);

router.get("/:id", controller.viewUser);

module.exports = router;
