const mongoose = require('mongoose');

const AllRestaurentSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['restaurent', 'hotal'],
        default: 'restaurent',
        require: true
    },
    info: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RestaurentInfo'
    },
    order: {
        deliveryTime: String,
        isServiceable: Boolean,
        hasOnlineOrdering: Boolean,
        actionInfo: {
            text: Sting,
            clickUrl: String
        }
    },
    distance: String,
    isPromoted: Boolean,
    promotedText: String,
    trackingData: Array,
    allCTA: Array,
    promoOffer: String,
    checkBulkOffers: Boolean,
    bulkOffers: Array,
    isDisabled: Boolean,
    bottomContainers: Array
});

const RestaurentModal = mongoose.model('AllRestautents', AllRestaurentSchema);

module.exports = RestaurentModal
