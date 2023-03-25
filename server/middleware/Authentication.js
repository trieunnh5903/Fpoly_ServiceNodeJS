const jwt = require('jsonwebtoken');
const authenWeb = (req, res, next) => {
    const { session } = req;
    const url = req.originalUrl.toLowerCase();
    console.log(">>>>>>>>>>>>>>" + url);
    if (!session) {
        if (url.includes('login')) {
            next();
        } else {
            res.redirect('/login');
        }
    } else {
        const { token } = session;
        console.log('------------------' + session.token);

        if (!token) {

            if (url.includes('login')) {
                next();
            } else {
                res.redirect('/login');
            }
        } else {
            jwt.verify(token, 'secrect', function (error, decoded) {
                console.log('*****************', error);
                if (error) {
                    console.log("/////////////////");
                    if (url.includes('login')) {
                        next();
                    } else {
                        res.redirect('/login');
                    }
                } else {
                    console.log("++++++++++++++++++++++")
                    if (url.includes('login')) {
                        res.redirect('/');
                    } else {
                        next();
                    }
                }
            })
        }
    }

}

module.exports = { authenWeb };