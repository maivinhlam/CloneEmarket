const ProductType = require("../models/ProductType.model");

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

  if (req.body.product_type = "none") {
    errors.push("Product type is required.");
  }
  
  if (errors.length) {
    ProductType.find({}).exec((err, result) => {
      res.render("product/create", {
        errors: errors,
        values: req.body,
        product_type: result,
      });
    });
    
    return;
  }
  next();
};
