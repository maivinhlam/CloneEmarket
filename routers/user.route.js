const express = require("express");
const multer = require("multer");

const db = require("../db");
const controller = require("../controller/user.controller");
const validate = require("../validate/user.validate");
const authMiddleware = require("../middlewares/auth.middleware");

const upload = multer({ dest: "./public/uploads/" });

const router = express.Router();

router.get("/", authMiddleware.requireAuth, controller.index);

router.get("/search", controller.search);

router.get("/create", controller.create);

router.post(
  "/create",
  upload.single("avatar"),
  validate.postCreate,
  controller.postCreate
);

router.get("/:id", controller.viewUser);

module.exports = router;
