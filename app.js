/**
 * Module dependencies.
 */
 var http = require('http');
 var fs = require('fs');

var app = require('./config/express')();

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

app.get('/', function (req, res) { res.render('index.html'); });
app.get('/cognection', function (req, res) { res.render('cognection.html'); });
app.get('/competitive-analysis', function (req, res) { res.render('companalysis.html'); });
app.get('/contact', function (req, res) { res.render('contact.html'); });
app.get('/simply-desserts', function (req, res) { res.render('desserts.html'); });
app.get('/flyers', function (req, res) { res.render('flyers.html'); });
app.get('/gsu-evaluation', function (req, res) { res.render('gsu.html'); });
app.get('/illustrations', function (req, res) { res.render('illustrations.html'); });
app.get('/aboutme', function (req, res) { res.render('about.html'); });
app.get('/resonote', function (req, res) { res.render('resonote.html'); });
app.get('/works', function (req, res) { res.render('works.html'); });


exports = module.exports = app;