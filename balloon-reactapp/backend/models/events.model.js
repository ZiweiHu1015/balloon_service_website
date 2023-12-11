const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
    eventname:{type:String, required:true},
    description:{type:String, required: true},
    price: {type: Number},
    },{
        timestamps: true,
    });
    const Events = mongoose.model('Events', eventsSchema);

    module.exports = Events;