const express = require('express'),
      cors = require('cors'),
      app = express();

const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { RSVPResponse } = require('./models/rsvp-response');

const port = process.env.PORT || 3000;
const origin = process.env.DATA_ORIGIN || 'http://localhost:9999';

const corsOptions = {
    origin
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

// ******************************************* //

app.get('/', (req, res) => {
    res.send('Sup!');
});

app.post('/responses', (req, res) => {
    const {
        firstName, lastName, email, printedName, allergies, 
        additionalGuests, attending, mealPreference, notes
    } = req.body;

    const newResp = new RSVPResponse({
        firstName, lastName, email, printedName, allergies, 
        additionalGuests, attending, mealPreference, notes
    });

    newResp.save()
        .then((doc) => res.send({ status: 'Peachy!' }))
        .catch((e) => res.status(400).send({ status: 'Not peachy.' }));
});

// ******************************************* //

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});