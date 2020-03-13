const express = require('express');
const bodyParser = require('body-parser');
const Controller = require('../server/models');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlendcoded({extended: true}));

app.use(express.static(__dirname + '/../client'));

app.get('/api/reservations', (req, res) => {

});
