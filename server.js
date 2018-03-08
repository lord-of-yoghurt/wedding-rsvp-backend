const express = require('express'),
      app = express();

const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { RSVPResponse } = require('./models/rsvp-response');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// *************************** //

app.post('/responses', (req, res) => {

});



app.listen(port, () => {
    console.log(`Listening on ${port}`);
});