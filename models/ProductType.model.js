const mongoose = require("mongoose");
let productTypeSchema = new mongoose.Schema({
  _id: String,
  name: String,
});

const ProductType = mongoose.model(
  "ProductType",
  productTypeSchema,
  "product_type"
);

module.exports = ProductType;
