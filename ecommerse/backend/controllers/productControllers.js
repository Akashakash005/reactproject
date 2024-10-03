const ProductModel = require("../models/productModel");
const { param } = require("../routes/product");

//get products API - /api/v1/products
exports.getProducts = async (req, res, next) => {
  const query = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword, //checks for the keyword
          $options: "i", //for ignore caseSensitivity
        },
      }
    : {};
  const products = await ProductModel.find(query);

  res.json({
    success: true,
    products,
  });
};

//get products API - /api/v1/singleproduct/:id
exports.getSingleProduct = async (req, res, next) => {
  console.log(req.params.id, "ID");
  try {
    const product = await ProductModel.findById(req.params.id);

    res.json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
