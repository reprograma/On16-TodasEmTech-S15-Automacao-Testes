const DATABASE_URI = process.env.DATABASE_URI
const mongoose = require ("mongoose");

mongoose.connect(DATABASE_URI);

let db = mongoose.connection;

module.exports = db;

