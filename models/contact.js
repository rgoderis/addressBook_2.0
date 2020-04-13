const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new Schema({
    name: {
        first: String,
        last: String
    },
    email: String,
    phoneNumber: [{
        type: String,
        number: String
    }],
    address: [{
        type: String,
        address: String,
        city: String,
        state: String,
        zip: String
    }],
    company: String,
    position: String,
    website: String,
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'notes'
    }]
});

module.exports = mongoose.model('contacts', Contact)