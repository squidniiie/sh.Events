const EventController = require('../controllers/event.controllers');
module.exports = function (app) {
    app.post('/api/new_event', EventController.createEvent);
    app.get('/api/events', EventController.getAllEvents);
    app.get('/api/events/:city/city', EventController.getEventsByCity);
    app.get('/api/events/:id', EventController.getEvent);
    app.put('/api/events/:id/edit', EventController.updateEvent);
    app.delete('/api/events/:id', EventController.deleteEvent);
}