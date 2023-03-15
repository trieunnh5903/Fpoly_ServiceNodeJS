const express = require('express');
const router = express.Router();

// http://localhost:3000/chu-vi?a=2&b=3
router.post('/', async function (req, res, next) {
    const { a, b, r } = req.query;
    const { type } = req.body;
    let result = '';
    const PI = Math.PI;
    if (type == 'hinh-chu-nhat') {
        result = `Chu vi hình chữ nhật là ${((Number(a) + Number(b)) * 2)}`;
    } else if (type == 'hinh-vuong') {
        result = `Chu vi hình vuông là ${Number(a) * 4}`;
    } else if (type == 'hinh-tron') {
        result = `Chu vi hình tròn là ${Number(r) * 2 * PI}`;
    }
    //  res.render('layout',{title: 'Diện tích',kq:kq});
    res.json({ type: type , result: result });
});


//localhost:3000/chu-vi/hinh-vuong/?a=4&b=5
router.get('/:type', function (req, res, next) {
    const { type } = req.params;
    const { a, b, r } = req.query;
    let result;
    switch (type) {
        case 'hinh-vuong':
            result = `Chu vi hình vuông là: ${a * 4}`;
            break;
        case 'hinh-chu-nhat':
            result = `Chu vi hình chữ nhật là: ${(Number(a) + Number(b)) * Number(2)}`;
            break;
        case 'hinh-tron':
            result = `Chu vi hình tròn là: ${r * 2 * Math.PI}`;
            break;
        default:
            break;
    }
    // const result = `loai= ${type}, a = ${a}, b = ${b}, ban kinh = ${r}`;
    res.json({ result: result })
});

module.exports = router;