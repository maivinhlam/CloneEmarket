const db = require("../db");
module.exports.postCreate = (req, res, next) => {
  var errors = [];
  if (!req.body.name) {
    errors.push("Name is required.");
  }
  if (!req.body.description) {
    errors.push("Description is required.");
  }
  if (!req.body.price) {
    errors.push("Price is required.");
  }

  if (!req.body.product_type) {
    errors.push("Product type is required.");
  }

  if (errors.length) {
    let sql = "select * from product_type";

    db.query(sql, function (err, result) {
      res.render("product/create", {
        errors: errors,
        values: req.body,
        product_type: result,
      });
      return;
    });
  }
  res.locals.success = true;
  next();
};
