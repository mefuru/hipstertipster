/*
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var cons = require('consolidate');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', cons.swig);
app.use(express.bodyParser());
// app.use(express.favicon(__dirname + 'public/img/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/feed', routes.feed);
// app.get('/item', routes.item);
app.get('/contact', routes.contact);
app.get('/addevent', routes.addevent);
app.get('/vote/:event', routes.vote);

app.param('event', function(req, res, next, id){
    // find event
    req.eventId = id;
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
