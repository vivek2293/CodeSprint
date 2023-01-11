const mongoose = require("mongoose");

const info = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    rollNo:{
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    branch: {
        type: String,
        unique: true,
        required: true
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    year: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Information", info);