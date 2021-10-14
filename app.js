var express = require('express');
var app = express();

// index page
app.get('/', function(req, res) {
  res.status(200).json('This is Index Page');
});

app.get('/route-a-1', function(req, res) {
  res.status(200).json('This is route-a-1 page');
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server is listening on port ${port}`);