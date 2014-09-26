module.exports = function (app) {
    app.get('/', function(req, res) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(404).send(JSON.stringify({ code: 200, message: "Default service found !" }));
    });
};
