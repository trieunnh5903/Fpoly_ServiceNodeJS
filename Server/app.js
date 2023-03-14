var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productRouter = require('./routes/product');
const dienTichRouter = require('./routes/dientich.js');
const chuViRouter = require('./routes/chuvi.js');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// console.log(path.join(__dirname, 'views'))
// console.log(__dirname)
// D:\GitHub\Fpoly_AndroidService\server

//partials
var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);

app.use('/dien-tich', dienTichRouter);
app.use('/chu-vi', chuViRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

/*
req, res, next
req -> request :  
  request.query: lay du lieu tu query string
  request.body: lấy dữ liệu tiwf form
  request.param: lấy dữ liệu từ url
*/
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
