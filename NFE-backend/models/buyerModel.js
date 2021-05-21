const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema.Types;

const buyerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,"Please enter your name"],
        trim :true
    },
    email : {
        type : String,
        unique : true,
        trim : true
    },
    password : {
        type : String,
        required : [true,"Please enter your password"]
    },
    photo : {
        type : String,
        default : "https://res.cloudinary.com/mycartdb/image/upload/v1621406053/buyer_nc5qk6.jpg"
    },
    gender : {
        type : String
    },
    location : {
        type : String
    },
    phoneNo : {
        type : Number
    },
    product : {
        type : String,
       required : true
    },
    role : {
        type : Number,
        default : 2
    },
    order : [{
        type : ObjectId,
        ref : "BuyerOrder"
    }],
    orderCount :{
        type : Number
    },
    notification : [{
       type : ObjectId,
       ref : "BuyerNotif"
   }],
   
  
});

module.exports = mongoose.model('Buyer',buyerSchema);