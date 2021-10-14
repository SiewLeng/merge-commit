var express = require('express');
var app = express();

// index page
app.get('/', function(req, res) {
  res.status(200).json('This is Index Page');
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server is listening on port ${port}`);