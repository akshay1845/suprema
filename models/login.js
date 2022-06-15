const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

module.exports =new mongoose.model("login", loginSchema);