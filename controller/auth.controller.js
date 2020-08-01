const db = require("../db");

module.exports.login = (req, res) => {
  res.render("auth/login");
};

module.exports.postLogin = (req, res) => {
  const myEmail = req.body.email;
  const myPassword = req.body.password;

  // const user = db.get("users").find({ email: myEmail }).value();
  let sql = "SELECT * FROM users WHERE email=?";
  let user;
  db.query(sql, [myEmail], (err, result) => {
    if (err) throw err;

    user = result;

    if (!user) {
      res.render("auth/login", {
        errors: ["User dose not exits."],
        values: req.body,
      });
      return;
    }

    if (user[0].password !== myPassword) {
      res.render("auth/login", {
        errors: ["Wrong password."],
        values: req.body,
      });
      return;
    }

    res.cookie("userId", user[0].user_id, {
      signed: true,
    });

    res.redirect("/users");
  });
};
