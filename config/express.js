var express = require('express'),
    path = require('path');

module.exports = function () {
    var app = express();
    app.set('port', process.env.PORT || 5000);
    app.set('views', __dirname + '/../views');
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(express.bodyParser({keepExtensions:true,uploadDir:__dirname+'/public/icons/tmp'}));
    app.use(express.cookieParser());

    app.use(express.static(path.join(__dirname, '/../public')));

    app.use(app.router);

    if ('development' == app.get('env')) {
        app.use(express.errorHandler());

        app.use(function(req, res, next) {
             console.log(req.url);
             next();
        });
    }

    return app;
};