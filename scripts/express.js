var express = require('express');
var path = require('path');
const app = express();

app.use(express.static('../images'));


app.get('/', (req, res) => {  //index is the root, so we don't put index.html
  res.sendFile(path.join(__dirname, '../templates/index.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/contact.html'));
});


app.listen(27017);