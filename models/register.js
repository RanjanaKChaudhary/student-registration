const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
        name: String,
        email: { type: String, unique: true },
        course: String,
        date: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Register", registerSchema);