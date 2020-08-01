const express = require("express");
const controller = require("../controller/product.controller");
const validate = require("../validate/product.validate");
const multer = require("multer");
const upload = multer({ dest: "./public/uploads/products" });
const router = express.Router();

router.get("/", controller.index);

router.get("/create", controller.create);

router.post(
  "/create",
  upload.single("image"),
  validate.postCreate,
  controller.postCreate
);

module.exports = router;
