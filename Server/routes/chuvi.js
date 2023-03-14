const express = require('express');
const router = express.Router();

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