const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://anairam_fn:mari2409@cluster0.mmjbu.mongodb.net/reprograma");

let db = mongoose.connection;

module.exports = db;