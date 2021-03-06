var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sessionRouter = require('./routes/sessions');
var connection = require('./database/dbconnection');
var bodyParser = require('body-parser');
var app = express();

var router = express.Router();

var bodyParser = require('body-parser');
//router.use(bodyParser.urlencoded({ extended: true }));
//router.use(bodyParser.json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connection.connect();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/PostSession',sessionRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

     
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
