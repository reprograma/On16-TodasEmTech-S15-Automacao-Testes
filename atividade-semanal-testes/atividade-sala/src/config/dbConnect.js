const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://letbatista2:hRpDSF65871@cluster0.qyzo3.mongodb.net/aula15testes');

let db = mongoose.connection;

module.exports = db;