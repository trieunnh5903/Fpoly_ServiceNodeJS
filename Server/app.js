var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var indexRouter = require('./routes/index');
const productApiRouter = require('./routes/api/ProductApi');
const userApiRouter = require('./routes/api/UserApi');
const productCpanelRouter = require('./routes/cpanel/ProductCpanel');
const userCpanelRouter = require('./routes/cpanel/UserCpanel');
var app = express();
const mongoose = require('mongoose');
require('./components/category/CategoryModel')
require('./components/products/ProductModel')

mongoose.connect('mongodb://127.0.0.1:27017/GroceryShop', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
  .catch(err => console.log('>>>>>>>>> DB Error: ', err));


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

app.use(session({
  secret: 'iloveyou',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use('/', indexRouter);
app.use('/api/user', userApiRouter);
app.use('/api/product', productApiRouter);
app.use('/cpanel/user', userCpanelRouter);
app.use('/cpanel/product', productCpanelRouter);

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
/*
req, res, next
req -> request :  
  request.query: lay du lieu tu query string
  request.body: lấy dữ liệu tiwf form
  request.param: lấy dữ liệu từ url
*/