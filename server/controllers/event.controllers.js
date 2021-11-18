const { Event } = require('../models/event.models')

// CREATE METHOD:

module.exports.createEvent = (request, response) => {
    Event.create(request.body)
        .then(newEvent => response.json(newEvent))
        .catch(err => response.status(400).json(err))
}

// RETRIEVE METHODS:

module.exports.getAllEvents = (request, response) => {
    Event.find({})
        .then(events => response.json(events))
        .catch(err => response.json(err))
}
module.exports.getEvent = (request, response) => {
    Event.findOne({ _id: request.params.id })
        .then(event => response.json(event))
        .catch(err => response.json(err))
}
module.exports.getEventsByCity = (request, response) => {
    Event.find({ city: request.params.city })
        .then(events => response.json(events))
        .catch(err => response.json(err))
}
// params


// UPDATE METHOD:

module.exports.updateEvent = (request, response) => {
    Event.findOneAndUpdate({ _id: request.params.id }, request.body, { runValidators: true, new: true })
        .then(updatedEvent => response.json(updatedEvent))
        .catch(err => response.status(400).json(err))
}

// DELETE METHOD:

module.exports.deleteEvent = (request, response) => {
    Event.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}