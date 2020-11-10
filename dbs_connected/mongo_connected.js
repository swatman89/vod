const mongoose = require('mongoose');
const config =require("config");
// mongoose.connect('mongodb://localhost:27017/shop', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(`mongodb+srv://koko:${config.get("dbPass")}@cluster0.jqikq.mongodb.net/shop`, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongo connected");
});

module.exports = db