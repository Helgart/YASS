var fs = require('fs');

module.exports = {

    files: [],
    services: {},
    path: '',
    serviceFolder: '',

    _loadServices: function (path) {
        var services = fs.readdirSync(path);
        var service;

        for (var i = 0, len = services.length; i < len; i++) {
            service = require(path + '/' + services[i]);
            this.services[service.service.name] = service;
            this.files[service.service.name] = path + '/' + services[i];
        }
    },

    load: function (path, serviceFolder) {
        this.path = process.cwd() + '/' + path;
        this.serviceFolder = serviceFolder;
        var files = fs.readdirSync(path);

        if (files === undefined) {
            return;
        }

        for (var i = 0, len = files.length; i < len; i++) {
            if (fs.existsSync(this.path + '/' + files[i] + '/' + this.serviceFolder)) {
                this._loadServices(this.path + '/' + files[i] + '/' + this.serviceFolder);
            }
        }
    }

};
