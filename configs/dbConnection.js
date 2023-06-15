const mongoose = require("mongoose");

const dbConnect = () =>
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("sucessful connection to the database");
    })
    .catch((error) => {
      console.log(error.message);
      process.exit(1);
    });

dbConnect();
