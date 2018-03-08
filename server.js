const express = require('express'),
      app = express();

const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { RSVPResponse } = require('./models/rsvp-response');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// ******************************************* //

app.post('/responses', (req, res) => {
    const {
        firstName, lastName, email, allergies, additionalGuests,
        attending, mealPreference, notes
    } = req.body;

    const newResp = new RSVPResponse({
        firstName, lastName, email, allergies, additionalGuests,
        attending, mealPreference, notes
    });

    newResp.save()
        .then((doc) => res.send({ status: 'Peachy!' }))
        .catch((e) => res.status(400).send({ status: 'Not peachy.' }));
});

// ******************************************* //

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});