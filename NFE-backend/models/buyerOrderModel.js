const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema.Types;

const buyerOrderSchema = new mongoose.Schema({
    product : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    baseRate : {
        type : Number,
        required : true
    },
    postedDate : {
        type : Date,
        default : Date.now
    },
    dueDate : {
        type : String,
        required : true
    },
    createdBy : {
        type : ObjectId,
        ref: "Buyer"
    },
    boughtFrom : {
        type : ObjectId,
        ref : "Farmer",
        default: null
    },
    isActive : {
        type : Boolean,
        default : true
    },
    isBid : {
        type : Boolean,
        default : false
    },
    bidBy : {
        type : ObjectId,
        ref : "Farmer",
        default : null
    },
    bidAmount : {
        type : Number,
        default : 1
    },
    adreedDate :{
        type :Date
    }
   
})

module.exports = mongoose.model("BuyerOrder",buyerOrderSchema)