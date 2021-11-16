const express = require('express');
const cors = require('cors');
const app = express();

require('./config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/event.routes')(app);
app.listen(5000, () => {
    console.log("Listening at Port 5000")
})