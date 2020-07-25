var express = require("express");
var router = express.Router();


var db = require("../db");
var controller = require("../controller/user.controlloer")

router.get("/", controller.index);

router.get("/search", controller.search);

router.get("/create", controller.create);

router.post("/create", controller.createPost);

router.get("/:id", controller.viewUser);

module.exports = router;
