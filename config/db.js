const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connection = mongoose.connect("mongodb+srv://saurabh:saurabh@cluster0.1xua6dt.mongodb.net/random-word");
module.exports = { connection };
