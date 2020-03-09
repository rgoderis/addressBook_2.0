const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Note = new Schema({
    body: String
});

module.exports = mongoose.model('notes', Note);