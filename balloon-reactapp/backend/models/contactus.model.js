const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactusSchema = new Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: false },
    phone: { type: String, required: true },
    eventDate: { type: Date, required: true },
    startTime: { type: String, required: false },
    endTime: { type: String, required: false },
    eventLocation:{ type: String, required: false },
    locationType:{ type: String, required: false },
    budget:{type: Number, required: false},
}, {
    timestamps: true,
});

const ContactUs = mongoose.model('ContactUs', contactusSchema);

module.exports = ContactUs;