const shortid = require("shortid");
const db = require("../db");

module.exports = (req, res, next) => {
  if (!req.signedCookies.sessionId) {
    const sessionId = shortid.generate();
    res.cookie("sessionId", sessionId, {
      signed: true,
    });

    db.get("sessions")
      .push({
        id: sessionId,
      })
      .write();
  }

  const sessionId = req.signedCookies.sessionId;

  let size = db
    .get("sessions")
    .find({ id: sessionId })
    .get("cart")
    .size()
    .value();
  res.cookie("countProduct", size);
  next();
};
