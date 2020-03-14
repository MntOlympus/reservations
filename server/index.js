const express = require('express');
const bodyParser = require('body-parser');
const Controller = require('../server/controllers/getProperty.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client'));

app.listen(port, () => console.log('server is listening on port 3000...'))


app.get('/api/properties', (req, res) => {
  Controller.getProperty(req, res);
});

