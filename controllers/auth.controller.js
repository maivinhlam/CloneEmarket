const User = require("../models/users.model");

module.exports.login = (req, res) => {
  res.render("auth/login");
};

module.exports.postLogin = async (req, res) => {
  const myEmail = req.body.email;
  const myPassword = req.body.password;

  const user = await User.find({ email: myEmail }).exec();

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

};
