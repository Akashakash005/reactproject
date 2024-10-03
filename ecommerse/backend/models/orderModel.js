const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  cartItems: Array,
  amount: String,
  status: String,
  createdAt: Date,
});

//using above Schema creating model

const orderModel = mongoose.model("Order", orderSchema);

module.exports = orderModel;
