const mongoose = require('mongoose');

const RSVPResponse = mongoose.model('RSVPResponse', {
    firstName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    allergies: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    additionalGuests: {
        type: Array
    }
});

module.exports = { RSVPResponse };