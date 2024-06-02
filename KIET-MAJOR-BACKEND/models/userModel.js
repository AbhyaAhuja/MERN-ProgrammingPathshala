const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        default:"default-user",
    },
  
    createdAt:{
        type:Date,
        default:new Date(),
    },
    updatedAt:{
        type:Date,
        default: new Date(),
    }
})

const userModel = mongoose.model('users',userSchema);
module.exports = userModel;