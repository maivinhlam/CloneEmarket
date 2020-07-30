const db = require("../db");

module.exports.login = (req, res) => {
  res.render("auth/login");
};

module.exports.postLogin = (req, res) => {
  const myEmail = req.body.email;
  const myPassword = req.body.password;

  const user = db.get("users").find({ email: myEmail }).value();
  if (!user) {
    res.render("auth/login", {
      errors: ["User dose not exits."],
      values: req.body,
    });
    return;
  }

  if (user.password !== myPassword) {
    res.render("auth/login", {
      errors: ["Wrong password."],
      values: req.body,
    });
    return;
  }

  res.cookie("userId", user.id, {
    signed: true,
  });

  res.redirect("/users");
};
