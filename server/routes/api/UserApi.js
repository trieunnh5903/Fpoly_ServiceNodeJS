const express = require('express');
const router = express.Router();
const userController = require('../../components/users/UserController');
//localhost:3000/api/user/login
router.post('/login', async function (req, res, next) {
    const { email, password } = req.body;
    const result = await userController.login(email, password);
    if (result) {
       return res.json({error: false, email: email, password: password});
    } else {
        return res.json({error: true, message: 'Email or password failed'});
    }
});
module.exports = router;