require("dotenv").config();
const mongoose = require("mongoose");

//function to connect  to the database using Mongoose
exports.connectMonggose = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      // useNewUrlParser: true
    })
    .then((e) => console.log("Connected to Mongodb =>> CSV Upload"))
    .catch((e) => console.log("Not Connect Mongodb"));
};
