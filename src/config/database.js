const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  await mongoose.connect(process.env.FOODIE_HUB_DB);
};

module.exports = { connectDB };
