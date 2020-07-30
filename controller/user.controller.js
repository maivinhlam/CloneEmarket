var db = require("../db");
const shortid = require("shortid");

module.exports.index = (req, res) => {
  res.render("users/index", {
    users: db.get("users").value(),
  });
};

module.exports.search = (req, res) => {
  var q = req.query.q;
  var matchedUsers = db.get("users").filter({ name: q }).value();

  // var matchedUsers = users.filter((user) => {
  //   return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  // });

  res.render("users/index", {
    users: matchedUsers,
  });
};

module.exports.create = (req, res) => {
  res.render("users/create");
};

module.exports.postCreate = (req, res) => {
  req.body.id = shortid.generate();
  req.body.avatar = req.file.path.split("\\").slice(1).join("\\");
  console.log(req.file.path);
  db.get("users").push(req.body).write();

  res.redirect("/users");
};

module.exports.viewUser = (req, res) => {
  var id = req.params.id;

  var user = db.get("users").find({ id: id }).value();
  console.log(user);
  res.render("users/view", {
    user: user,
  });
};
