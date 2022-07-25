
require("dotenv").config()
const mongoose = require('mongoose');

mongoose.connect(process.env.DBATLAS);

const db = mongoose.connection;

module.exports = db;