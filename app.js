const express = require('express');
const app = express();
app.use(express.static('public'));




//Home route
app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));

//about route
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

//works route
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));

