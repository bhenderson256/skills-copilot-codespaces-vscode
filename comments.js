// Create web server
// Run: node comments.js
// Open browser: http://localhost:3000
// Stop server: Ctrl + C

const express = require('express');
const app = express();
const fs = require('fs');

const port = 3000;

app.use(express.static('public'));

app.get('/', function(request, response){
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/comments', function(request, response){
  response.sendFile(__dirname + '/views/comments.html');
});

app.get('/comments.json', function(request, response){
  fs.readFile(__dirname + '/data/comments.json', function(error, data){
    response.json(JSON.parse(data));
  });
});

app.listen(port, function(){
  console.log(`Server is listening on port ${port}`);
});