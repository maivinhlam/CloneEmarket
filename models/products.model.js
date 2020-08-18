const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
  type_id: String,
  name: String,
  image: String,
  description: String,
  price: Number,
});

let Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;
