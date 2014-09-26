var documents_controller = require('./Controllers/Documents');

module.exports = function (app) {
    app.get('/documents', documents_controller);
};
