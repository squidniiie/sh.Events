const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters long"]
    },
    date: {
        type: Date,
        required: [true, "Please add the date of your event"]
    },
    description: {
        type: String,
        required: [true, "Please add a description for your event"]
    },
    city: {
        type: String,
        enum: ['los_angeles', 'san_francisco', 'seattle', 'remote'],
        required: [true, "State the location of your event"]
    },
    isVirtual: {
        type: Boolean,
        required: [true, "Please indicate if your event is virtual"]
    },
    vibes: {
        type: String,
        enum: ['casual', 'dressy', 'themed'],
    }

}, { timestamps: true });
module.exports.Event = mongoose.model('Event', EventSchema);