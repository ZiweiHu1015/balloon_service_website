const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flowerSchema = new Schema({
    flowername: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image:{type: String, required: true}
    
}, {
    timestamps: true,
});

const Flower = mongoose.model('Flower', flowerSchema);

module.exports = Flower;