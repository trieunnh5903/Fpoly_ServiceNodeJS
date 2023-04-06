const userService = require('./UserService');
const mailer = require('nodemailer')
const transporter = mailer.createTransport({
    pool: true,
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use TLS
    auth: {
        user: 'nguyennhathaitrieu5903@gmail.com',
        pass: 'ggcmvzftxlukjeha'
    },
});

const login = async (email, password) => {
    return await userService.login(email, password);
}

const register = async (email, password, name) => {
    return await userService.register(email, password, name);
}

const sendMail = async (email, subject, content) => {
    try {
         const mailOption = {
        from: "admin",
        to: email,
        subject,
        html: content
    }
    return await transporter.sendMail(mailOption);
    } catch (error) {
        console.log("sendMail: ", error);
    }
   
}
module.exports = {login, register, sendMail}