const express = require('express'),
      cors = require('cors'),
      app = express(),
      path = require('path');

const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { RSVPResponse } = require('./models/rsvp-response');

const port = process.env.PORT || 3000;
const origin = process.env.DATA_ORIGIN || 'http://localhost:8080';
const API_KEY = process.env.API_KEY || 'thisismytestkey';

const corsOptions = {
    origin
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

// ******************************************* //

app.get('/', (req, res) => {
    res.send('Sup!');
});

app.get('/responses', (req, res) => {
    if (req.query.key !== API_KEY) {
        res.send({
            status: 'failure',
            error: 'Invalid key. Don\'t be trying anything silly now!'
        });
    }
    
    RSVPResponse.find()
        .then((responses) => {
            res.send({
                status: 'success',
                responses
            });
        })
        .catch((e) => {
            res.status(400).send({
                status: 'failure',
                error: e
            });
        });
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

app.get('/wakemydyno.txt', (req, res) => {
    res.sendFile(path.join(__dirname, 'wakemydyno.txt'));
});

// ******************************************* //

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});