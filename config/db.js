
const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/courseflow");
        console.log("mongoDB connected successfully!");
    }catch(error)
    {
        console.log("Some error!");
    }
}

module.exports = connectDB;