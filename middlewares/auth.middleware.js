const User = require("../models/users.model");

module.exports.requireAuth = async function (req, res, next) {
  if (!req.signedCookies.userId) {
    res.redirect("/auth/login");
    return;
  }

  const user = await User.find({ _id: req.signedCookies.userId }).exec();
  if (!user) {
    res.redirect("/auth/login");
    return;
  }

  res.locals.user = user;

  next();
};
