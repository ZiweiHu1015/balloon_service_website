const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const grabandgoSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image:{type: String, required: true}
    
}, {
    timestamps: true,
});

const GrabAndGo = mongoose.model('GrabAndGo', grabandgoSchema);

module.exports = GrabAndGo;