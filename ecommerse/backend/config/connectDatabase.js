const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URL).then((con) => {
    //con is a parameter of host
    console.log("MongoDB connected to host:" + con.connection.host); // to get the connection of the host
  });
};

module.exports = connectDatabase;
