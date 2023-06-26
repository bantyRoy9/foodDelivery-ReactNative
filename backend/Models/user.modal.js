const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        // required:true,
        trim:true
    },
    phone:{
        type:String,
        trim:true,
        // unique:true,
    },
    role:{
        type:String,
        enum:['ADMIN','USER'],
        default:'USER'
    },
    phoneOTP:String
},{timestamps:true});

const User = mongoose.model('User',userSchema);

module.exports = User