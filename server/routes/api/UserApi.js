const express = require('express');
const router = express.Router();
const userController = require('../../components/users/UserController');
const validation = require('../../middleware/ValidationRegister');
//localhost:3000/api/user/login
router.post('/login', async function (req, res, next) {
    try {
        const { email, password } = req.body;
        const result = await userController.login(email, password);
        if (result) {
            return res.status(200).json({ error: false, user: result });
        } else {
            return res.status(400).json({ error: true, message: 'Email or password failed' });
        }
    } catch (error) {
        return res.status(400).json({ error: true, message: error });

    }

});

//localhost:3000/api/user/register
router.post('/register',[validation.validationRegister], async function (req, res, next) {
    try {
        const { email, password, name } = req.body;
        const result = await userController.register(email, password, name);
        if (result) {
            return res.status(200).json({ error: false, user: { email: email, password: password, name: name } });
        } else {
            return res.status(400).json({ error: true, message: 'Email or password existed' });
        }
    } catch (error) {
        return res.status(400).json({ error: true, message: error });

    }
})
module.exports = router;