var fs = require('fs');

module.exports = {

    files: [],
    path: '',
    filename: '',

    load: function (path, filename, app) {
        var self = this;
        this.path = process.cwd() + '/' + path;
        this.filename = filename;
        fs.readdir(path, function (err, files) {
            if (files === undefined) {
                return;
            }
            for (var i = 0, len = files.length; i < len; i++) {
                if (fs.existsSync(self.path + '/' + files[i] + '/' + filename + '.js')) {
                    require(self.path + '/' + files[i] + '/' + filename)(app);
                }
            }
        });
    }

};
