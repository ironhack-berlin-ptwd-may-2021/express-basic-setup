const express = require('express');

const app = express();

// our first Route

// GET /images/hello.jpg
app.use(express.static('public'))

// GET http://localhost:3000/home
app.get('/home', (request, response, next) => {


  response.sendFile(__dirname + '/views/home.html');

});

// GET http://localhost:3000/home
app.get('/hellotest', (request, response, next) => {


  response.sendFile(__dirname + '/views/test.html');

});

app.listen(3000, () => console.log('My first app listening on port 3000! '));