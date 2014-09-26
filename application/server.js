var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send(JSON.stringify({ code: 200, message: "Default service found !" }));
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'application/json');
    res.status(404).send(JSON.stringify({ code: 404, message: "service not found" }));
});

// Starting server
app.listen(80);
