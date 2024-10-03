const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  descriptions: String,
  ratings: String,
  images: [
    {
      image: String,
    },
  ],
  category: String,
  seller: String,
  stock: String,
  numOfReviews: String,
  createdAt: Date,
});

//using above Schema creating model

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
