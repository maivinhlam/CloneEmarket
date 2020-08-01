const db = require("../db");

module.exports.requireAuth = (req, res, next) => {
  if (!req.signedCookies.userId) {
    res.redirect("/auth/login");
    return;
  }
  let sql = "SELECT * FROM users where user_id=?";
  let userId = [req.signedCookies.userId];
  let user;
  db.query(sql, [userId], (err, result) => {
    if (err) throw err;

    user = result;
    if (!user) {
      res.redirect("/auth/login");
      return;
    }

    res.locals.user = user;

    next();
  });

  // const user = db.get("users").find({ id: req.signedCookies.userId }).value();
};
