const shortid = require("shortid");
const Product = require("../models/products.model");
const ProductType = require("../models/ProductType.model");

module.exports.index = async (req, res) => {
  const products = await Product.find({});
  res.render("product/index", {
    products: products,
  });
};

module.exports.create = async (req, res) => {
  const productsType = await ProductType.find({});
  res.render("product/create", {
    product_type: productsType,
  });
};

module.exports.postCreate = async (req, res) => {
  let id = shortid.generate();
  let typeId = req.body.product_type;
  let name = req.body.name;
  let description = req.body.description;
  let price = req.body.price;
  let image = req.file.path.split("\\").slice(1).join("\\");

  await Product.create({
    type_id: typeId,
    name: name,
    image: image,
    description: description,
    price: price,
  });
  res.redirect("/products");
};
