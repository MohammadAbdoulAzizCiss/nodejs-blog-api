const express = require("express");
require("dotenv").config();
require("./configs/dbConnection");

const app = express();
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`app is running on port ${PORT}`));
