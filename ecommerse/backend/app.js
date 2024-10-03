const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");

const cors = require("cors");
const connectDatabase = require("./config/connectDatabase");
dotenv.config({ path: path.join(__dirname, "config", "config.env") });

const products = require("./routes/product");
const orders = require("./routes/order");

connectDatabase();

//routes
app.use(express.json()); // middleware:to convert json data to body

app.use(cors()); //middleware : for security reason , req backend to dispay a access-control-allow-origin header
app.use("/api/v1/", products);
app.use("/api/v1/", orders);

app.listen(process.env.PORT, () => {
  console.log(
    `server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
