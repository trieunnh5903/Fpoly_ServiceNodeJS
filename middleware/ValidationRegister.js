const validationRegister = async (req, res, next) => {
    try {
        const { email, password, confirmPassword } = req.body;
        if (!email || !password || !confirmPassword) {
            return res.status(400).json({
                error: true,
                message: 'Thông tin không đầy đủ'
            })
        } else {
            if (password != confirmPassword) {
                return res.status(400).json({
                    error: true,
                    message: 'Mật khẩu không khớp'
                })
            }

            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({
                    error: true,
                    message: 'Email không hợp lệ'
                })
            }

            next();
        }
    } catch (error) {
        console.log('validationRegister ' + error);
        return res.status(400).json({
            error: true,
            message: error
        })
    }
}

module.exports = { validationRegister }