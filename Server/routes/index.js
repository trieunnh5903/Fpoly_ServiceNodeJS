var express = require('express');
var router = express.Router();
const auth = require('../middleware/Authentication');
//http://localhost:3000/
const userController = require('../components/users/UserController');
const jwt = require('jsonwebtoken');
//trang-chu
router.get('/', [auth.authenWeb], function (req, res, next) {
  res.render('index');
});


//login
router.get('/login', [auth.authenWeb], function (req, res, next) {
  res.render('user/login');
});

//handler result login
router.post('/login', [auth.authenWeb], async function (req, res, next) {
  const { email, password } = req.body;
  const result = await userController.login(email, password);
  //  save to session
  if (result) {
    const token = jwt.sign({ _id: result._id, role: result.role }, 'secrect');
    req.session.token = token;
    return res.redirect('/cpanel/product/list-product');
  } else {
    return res.redirect('/login');
  }
});


router.get('/logout', [auth.authenWeb], function (req, res, next) {
  req.session.destroy();
  res.redirect('/login');
});

//statistic
router.get('/statistic', function (req, res, next) {
  res.render('product/statistic');
});

//form
router.get('/form', function (req, res, next) {
  res.render('product/form');
});

// table
router.get('/table', async function (req, res, next) {
  res.render('product/table');
});
module.exports = router;
