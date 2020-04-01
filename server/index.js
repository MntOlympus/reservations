const express = require('express');
const bodyParser = require('body-parser');
const Controller = require('../server/controllers/getProperty.js');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => console.log(`server is listening on port ${port}...`))


app.get('/api/properties', Controller.getProperty)

