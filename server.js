const express = require('express'),
      app = express();

const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());



app.listen(port, () => {
    console.log(`Listening on ${port}`);
});