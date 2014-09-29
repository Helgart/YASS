module.exports.open = function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(JSON.stringify({ code: 200, message: "YASS is opening a document !" }));
};

module.exports.close = function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(JSON.stringify({ code: 200, message: "YASS is closing a document !" }));
};

module.exports.create = function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(JSON.stringify({ code: 200, message: "YASS is creating a document !" }));
};

module.exports.delete = function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(JSON.stringify({ code: 200, message: "YASS is deleting a document !" }));
};
