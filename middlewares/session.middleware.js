const shortid = require("shortid");
const db = require("../db");

module.exports = (req, res, next) => {
  if (!req.signedCookies.sessionId) {
    const sessionId = shortid.generate();
    res.cookie("sessionId", sessionId, {
      signed: true,
    });

    let sql = "INSERT INTO sessions VALUES ?";
    var datetime = new Date();
    let values = [[sessionId, datetime]];
    db.query(sql, [values], function (err, result) {
      if (err) throw err;
    });
    next();
  } else {
    const sessionId = req.signedCookies.sessionId;

    let size = 0;
    let sql =
      "SELECT count(sessions_id) as count FROM `sessions_order` WHERE sessions_id=?";

    db.query(sql, [[sessionId]], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        size = result[0].count;
      }
      res.cookie("countProduct", size);
      next();
    });
  }
};
