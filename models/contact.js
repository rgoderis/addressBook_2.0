const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new Schema({
    lastName: String,
    firstName: String,
    email: String,
    phoneNumber: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    company: String,
    jobTitle: String,
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'notes'
    }]
})


module.exports = mongoose.model('contacts', Contact)