const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/models');
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlendcoded({extended: true}));

app.use(express.static(__dirname + '/../client'));

app.get('/api/reservations', (req, res) => {

});
