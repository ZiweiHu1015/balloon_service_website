const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const grabandgoSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image:{type: String, required: true},
    imageList: { type: [String], required: false, default: [] },
    category:{ type: [String], required: false, default:[]}
    
}, {
    timestamps: true,
});

const GrabAndGo = mongoose.model('GrabAndGo', grabandgoSchema);

module.exports = GrabAndGo;