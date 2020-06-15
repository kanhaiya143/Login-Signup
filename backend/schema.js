const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//SECTION  collection and schema for Registration
let UserSchema = new Schema({
    first_name: {
        type: String,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        required: [true, "can't be blank"],

    },
    last_name: {
        type: String,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        required: [true, "can't be blank"]
    },
    email_address: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    no_clients: {
        type: String,
        required: [true, "can't be blank"]
    },
    trainer_category: {
        type: String,
        required: [true, "can't be blank"]
    },


}, {
    collection: 'MongoData'
});

module.exports = mongoose.model('MongoData', UserSchema);