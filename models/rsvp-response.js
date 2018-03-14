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
    printedName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    allergies: {
        type: String,
        required: false,
        trim: true
    }, 
    additionalGuests: {
        type: Array
    },
    attending: {
        type: String,
        required: true
    },
    mealPreference: {
        type: String,
        required: false
    },
    notes: {
        type: String,
        required: false
    }
});

module.exports = { RSVPResponse };