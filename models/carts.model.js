const mongoose = require("mongoose");
let cartSchema = new mongoose.Schema({
  _id: String,
  name: String,
});

const Cart = mongoose.model(
  "ProductType",
  productTypeSchema,
  "product_type"
);

module.exports = Cart;
