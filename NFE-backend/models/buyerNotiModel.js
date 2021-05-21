const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types; 

const buyerNotifSchema = new mongoose.Schema({
    message: {
        type: String,
        
    },
    createdBy : {
        type : ObjectId,
        ref: "Buyer"   
    }
},{
    timestamps : true
})

module.exports = mongoose.model('BuyerNotif',buyerNotifSchema);