require("dotenv").config()
const mongoose = require("mongoose");

mongoose.connect(process.env.DBATLAS)

let db = mongoose.connection;

module.exports = db;