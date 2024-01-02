const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  image: String,
  price: Number,
  description: String,
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

let products = mongoose.model("product", productSchema);

module.exports = products;  


