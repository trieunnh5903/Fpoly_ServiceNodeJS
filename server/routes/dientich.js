const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    const { type } = req.params;
    const { a, b, r } = req.query;
    let result;
    // const result = `loai= ${type}, a = ${a}, b = ${b}, ban kinh = ${r}`;
    res.render('dientichHCN', { result: result })
});
//localhost:3000/dien-tich/hinh-vuong/?a=4&b=5
router.get('/:type', function (req, res, next) {
    const { type } = req.params;
    const { a, b, r } = req.query;
    let result;
    switch (type) {
        case 'hinh-vuong':
            result = `
                Hình vuông có chiều dài cạnh là: ${a} - 
                Diện tich hình vuông là: ${a * a}`;
            break;
        case 'hinh-chu-nhat':
            result = `
            Hình chữ nhật có chiều dài là: ${a} -
            Hình chữ nhật có chiều rộng là: ${b} -
            Diện tich hình chữ nhật là: ${a * b}`;
            break;
        case 'hinh-tron':
            result = `
            Hình tròn có bán kính là: ${r} - 
            Diện tich hình tròn là: ${r * r * Math.PI}`;
            break;
        default:
            break;
    }
    res.render('index', { result: result })
});

module.exports = router;