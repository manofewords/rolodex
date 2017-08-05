const express = require('express');
const bodyParser = require('body-parser');

const app = express();
var cards = [];

app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/cards', function (request, response) {
  response.json(cards);
});

app.post('/cards', function (request, response) {
  cards.push(request.body);
  response.json(cards);
});

app.listen(3000);
