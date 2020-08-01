var db = require("../db");
const shortid = require("shortid");

module.exports.index = (req, res) => {
  let sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.render("users/index", {
      users: result,
    });
  });
};

module.exports.search = (req, res) => {
  var q = req.query.q;
  let sql = "SELECT * FROM users WHERE name like '%" + q + "%'";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.render("users/index", {
      users: result,
    });
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
  let sql = "INSERT INTO users VALUES ?";
  let values = [[id, email, password, name, phone, avatar]];
  db.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    res.redirect("/users");
  });
};

module.exports.viewUser = (req, res) => {
  let id = req.params.id;
  let sql = "SELECT * FROM users WHERE user_id = ?";
  db.query(sql, [id], function (err, result) {
    if (err) throw err;
    res.render("users/view", {
      user: result,
    });
  });
};
