const mongoose = require('mongoose');

const restaurentSchema = new mongoose.Schema({
    average_cost_for_two:Number,
    cuisines:String,
    currency:String,
    book_url:String,
    deeplink:String,
    establishment_types:Array,
    events_url:String,
    featured_image:String,
    has_online_delivery:{
        type:Number,
        enum:[0,1]
    },
    has_table_booking:{
        type:Number,
        enum:[0,1]
    },
    is_delivering_now:{
        type:Number,
        enum:[0,1]
    },
    location:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'restaurentsLocation'
    },
    menu_url:String,
    name:String,
    offers:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'restaurentOffers'
    },
    photos_url:String,
    price_range:Number,
    switch_to_order_menu:Number,
    thumb:String,
    url:String,
    user_rating:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'restaurentRatings'
    }
});
const restaurentLocation = new mongoose.Schema({
    address:String,
    city:String,
    latitude:String,
    locality:String,
    locality_verbose:String,
    longitude:String,
    zipcode:String
});

exports.restaurentModal = new mongoose.model("Restaurent", restaurentSchema);
exports.restaurentLocationModal = new mongoose.model("RestaurentLocation", restaurentLocation)
