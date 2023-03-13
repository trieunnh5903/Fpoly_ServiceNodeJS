var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  const { a, b, c } = req.query;
  const delta = b ** 2 - 4 * a * c;
  let result = ''
  if (delta < 0) {
    result = 'PT Vô nghiệm';
  } else if (delta == 0) {
    result = "Phương trình có 2 nghiệm kép x1 = x2 = " + (-b / (2 * a));
  } else {
    result = `Phuong trình có 2 nghiệm phân biệt: 
    x1 = ${(-b + Math.sqrt(delta)) / (2 * a)}
    x2 = ${(-b - Math.sqrt(delta)) / (2 * a)}`
  }
  res.render('index', { title: 'Express', result: result });
});

// http://localhost:3000/body
router.post('/body', async function (req, res, next) {
  const { a, b, c } = req.query;
  const delta = b ** 2 - 4 * a * c;
  let result = ''
  if (delta < 0) {
    result = 'PT Vô nghiệm';
  } else if (delta == 0) {
    result = "Phương trình có 2 nghiệm kép x1 = x2 = " + (-b / (2 * a));
  } else {
    result = `Phuong trình có 2 nghiệm phân biệt: 
    x1 = ${(-b + Math.sqrt(delta)) / (2 * a)}
    x2 = ${(-b - Math.sqrt(delta)) / (2 * a)}`
  }
  res.render('index', { title: 'Express', result: result });
});

//http://localhost:3000/params/1/2/3/check
router.get('/params/:a/:b/:c/check', function (req, res, next) {
  const { a, b, c } = req.params;
  const kq = `a = ${a}, b = ${b}, c = ${c}`;
  // res.render('index', { title: 'Express', result: kq })
  res.json({ title: 'Express', result: kq })
});

//http://localhost:3000/ket-hop/loai?name=abc&age=18
router.post('/ket-hop/:loai', function (req, res, next) {
  const { loai } = req.params
  const { name, age } = req.query;
  const { address } = req.body;
  const result = `loai= ${loai}, address = ${address}, name = ${name}, age = ${age}`;
  res.render('index', { result: result })
});

//localhost:300/ket-hop/loai?name=abc&age=18
// router.post('/ket-hop/:loai', function(req, res, next) {
//   const {loai} = req.params;
//   const {name, age} = req.query;
//   const {address} = req.body;
//   const result = `loai= ${loai}, address = ${}`
// })
module.exports = router;
