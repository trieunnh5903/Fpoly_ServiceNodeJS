var express = require('express');
var router = express.Router();
//http://localhost:3000/
const userController = require('../components/users/UserController');
//trang-chu
router.get('/', function(req, res, next){
  res.render('index');
});


//login
router.get('/login', function(req, res, next){
  res.render('user/login');
});

//handler result login
router.post('/login', async function(req, res, next){
  const {email, password} = req.body;
  const result = await userController.login(email, password);
  if (result) {
    return res.redirect('/');
  }else {
    return res.redirect('/login');
  }
});


//statistic
router.get('/statistic', function(req, res, next){
  res.render('product/statistic');
});

//form
router.get('/form', function(req, res, next){
  res.render('product/form');
});

//table
router.get('/table', function(req, res, next){
  res.render('product/table');
});
module.exports = router;
