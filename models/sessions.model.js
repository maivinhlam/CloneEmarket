const mongoose = require("mongoose");
let sessionSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  sessionId: { type: String },
  dateCreate: { type: Date, default: Date.now },
  cart: [
    {
      productId: { type: String },
      quantity: { type: Number, default: 1 },
    },
  ],
});

const Session = mongoose.model("Session", sessionSchema, "sessions");

module.exports = Session;
