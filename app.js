var express = require('express');
var methodOverride = require('method-override');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var util = require('util');
var multer = require('multer');
mongoose.connect('localhost:27017/mongoose');
var routes = require('./routes/index');
var users = require('./routes/users');
var sessions = require('./routes/session');
var api = require('./routes/api');
var rest = require('./routes/rest');
var apitest = require('./routes/apitest');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));
app.use(cookieParser('anystringoftext'));
app.use(session({ secret: 'anystringoftext',
                  saveUninitialized: true,
                  maxAge: 30000,
                  resave: true}));


// Give Views/Layouts direct access to session data.
  app.use(function(req, res, next){
    res.locals.session = req.session.user;
    next();
  });
app.use('/api/user/users', apitest);
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);
app.get('/api/posts', api.posts);
app.get('/api/user', rest);
app.get('/session', rest)
app.get('*', routes.index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;