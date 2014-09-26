var express = require('express');
var routes_manager = require('./Server/RoutesManager');

var app = express();

routes_manager.load('Application/Modules', 'Routes', app);

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'application/json');
    res.status(404).send(JSON.stringify({ code: 404, message: "service not found" }));
});

// Starting server
app.listen(80);
