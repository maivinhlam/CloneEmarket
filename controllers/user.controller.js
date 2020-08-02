var db = require("../db");
const shortid = require("shortid");
const Promise = require("promise");
const User = require("../models/users.model");

module.exports.index = (req, res) => {
  User.getUser((err, data) => {
    if (!err) {
      res.render("users/index", {
        users: data,
      });
    }
  });
};

module.exports.search = (req, res) => {
  var q = req.query.q;
  User.searchUserName(q, (err, data) => {
    if (!err) {
      res.render("users/index", {
        users: data,
      });
    }
  });
};

module.exports.create = (req, res) => {
  res.render("users/create");
};

module.exports.postCreate = (req, res) => {
  let id = shortid.generate();
  let avatar = req.file.path.split("\\").slice(1).join("\\");
  let email = req.body.email;
  let name = req.body.name;
  let password = req.body.password;
  let phone = req.body.phone;

  let user = new User(id, email, password, name, phone, avatar);
  user.save();

  res.redirect("/users");
};

module.exports.viewUser = (req, res) => {
  let id = req.params.id;
  User.getUserWithId(id, (err, data) => {
    if (!err) {
      res.render("users/view", {
        users: data,
      });
    }
  });
};
