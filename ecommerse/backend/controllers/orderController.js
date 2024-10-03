const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");

//create order -/api/v1/order
exports.createOrder = async (req, res, next) => {
  // console.log(req.body, "DATA");
  const cartItems = req.body;
  const amount = Number(
    cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
  ).toFixed(2);

  //using Number().toFixed(2) which alters the decimal to 2

  //accumulative value : it is the value which arrises before return the next value

  //the 0 is representing the initial value of the amount
  console.log(amount, "Amount");

  const status = "pending";
  const order = await orderModel.create({ cartItems, amount, status });

  //updating product stock
  cartItems.forEach(async (item) => {
    const product = await productModel.findById(item.product._id);
    product.stock = product.stock - item.quantity;
    await product.save();
  });

  res.json({
    success: true,
    message: "order works",
    order,
  });
};
