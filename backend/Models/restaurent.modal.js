const { default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const restaurentSchema = new Schema({
    has_online_delivery:{
        type:Number,
        enum:[0,1],
        default:1
    },
    photos_url:String,
    url:String,
    price_range:Number,
    user_rating:{
        type: mongoose.Schema.Types.ObjectId,
    }
});

exports.restaurentModal = modal('Restaurents', restaurentSchema);
