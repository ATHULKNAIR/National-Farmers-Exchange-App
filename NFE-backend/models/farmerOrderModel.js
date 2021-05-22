const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema.Types;

const farmerOrderSchema = new mongoose.Schema({
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
        type : Date,
        required : true
    },
    createdBy : {
        type : ObjectId,
        ref: "Farmer"   
    },
    boughtBy : {
        type : ObjectId,
        ref : "Buyer"
    },
    isActive : {
        type : Boolean,
        default : true
    },
    agreedDate :{
        type : Date
    }
   
})

module.exports = mongoose.model("FarmerOrder",farmerOrderSchema);