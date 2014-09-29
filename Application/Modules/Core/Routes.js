var status_controller = require('./Controllers/Status');
var documents_controller = require('./Controllers/Documents');

module.exports = function (app) {
    app.get('/', status_controller);
    app.get('/open/:file', documents_controller.open);
    app.get('/close/:id', documents_controller.close);
    app.get('/create', documents_controller.create);
    app.get('/delete/:file', documents_controller.delete);
};
