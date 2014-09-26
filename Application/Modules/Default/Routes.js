var status_controller = require('./Controllers/Status');

module.exports = function (app) {
    app.get('/', status_controller);
};
