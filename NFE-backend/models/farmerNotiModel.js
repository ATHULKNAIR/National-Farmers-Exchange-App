const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types; 

const farmerNotifSchema = new mongoose.Schema({
    message: {
        type: String,
        
    },
    createdBy : {
        type : ObjectId,
        ref: "Farmer"   
    }
},{
    timestamps : true
})

module.exports = mongoose.model('FarmerNotif',farmerNotifSchema);