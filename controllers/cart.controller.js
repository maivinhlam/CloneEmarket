const db = require("../db");
const shortid = require("shortid");
const { rules } = require("eslint-config-prettier");

module.exports.addToCart = (req, res) => {
  const productId = req.params.productId;
  const sessionId = req.signedCookies.sessionId;

  if (!sessionId) {
    res.redirect("/products");
    return;
  }

  // let count = db
  //   .get("sessions")
  //   .find({ id: sessionId })
  //   .get("cart." + productId, 0)
  //   .value();
  let count = 0;
  let sql =
    "SELECT count FROM `sessions_order` WHERE sessions_id = ? AND product_id = ?";

  db.query(sql, [sessionId, productId], function (err, result) {
    if (err) throw err;
    if (result.length > 0) {
      count = result[0].count;
    }

    if (count > 0) {
      sql =
        "UPDATE sessions_order SET count = ? WHERE sessions_id = ? AND product_id = ?";

      db.query(sql, [count + 1, sessionId, productId], function (err, result) {
        if (err) throw err;
      });
    } else {
      const id = shortid.generate();
      sql = "INSERT INTO sessions_order VALUES ?";
      let values = [[id, sessionId, productId, 1]];
      db.query(sql, [values], function (err, result) {
        if (err) throw err;
      });
    }
  });

  // db.get("sessions")
  //   .find({ id: sessionId })
  //   .set("cart." + productId, count + 1)
  //   .write();

  res.redirect("/products");
};

module.exports.index = (req, res) => {
  const sessionId = req.signedCookies.sessionId;
  let sql =
    "SELECT p.image_main, p.name, p.price, s.count FROM products p RIGHT JOIN sessions_order s ON s.product_id = p.product_id WHERE s.sessions_id = ?";

  let values = [[sessionId]];
  db.query(sql, [values], function (err, result) {
    if (err) throw err;
    let price = 0;

    for (var i = 0; i < result.length; i++) {
      price += result[i].price * result[i].count;
    }
    res.render("cart/index", {
      products: result,
      price: price,
    });
  });
};
