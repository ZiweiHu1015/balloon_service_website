const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactusSchema = new Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    eventDate: { type: String, required: true },
    startTime: { type: Number, required: false },
    endTime: { type: Number, required: false },
    eventLocation:{ type: String, required: true },
    locationType:{ type: String, required: false },
    budget:{type: Number, required: false},
}, {
    timestamps: true,
});

const ContactUs = mongoose.model('ContactUs', contactusSchema);

module.exports = ContactUs;