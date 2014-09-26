module.exports = function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(JSON.stringify({ code: 200, message: "Opening a document" }));
}
