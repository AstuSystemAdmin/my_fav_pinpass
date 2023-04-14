const mongoose = require("mongoose");

const { MONGODB } = process.env;

exports.connect = () => {
  // connect to db
  mongoose
    .connect(MONGODB)
    .then(() => {
        console.log("Successfully connected to database");
    })
    .catch((error) => {
        console.log("database connection failed..");
        console.error(error);
        process.exit(1);
    });
};