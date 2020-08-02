const db = require("../db");
const shortid = require("shortid");
const Product = require("../models/products.model");

module.exports.index = (req, res) => {
  Product.getProduct((err, data) => {
    res.render("product/index", {
      products: data,
    });
  });
};

module.exports.create = (req, res) => {
  let sql = "select * from product_type";

  db.query(sql, function (err, result) {
    res.render("product/create", {
      product_type: result,
    });
  });
};

module.exports.postCreate = (req, res) => {
  let id = shortid.generate();
  let typeId = req.body.product_type;
  let name = req.body.name;
  let description = req.body.description;
  let price = req.body.price;
  let image = req.file.path.split("\\").slice(1).join("\\");

  let product = new Product(id, typeId, name, description, price, image);
  product.save();

  res.redirect("/products");
};
