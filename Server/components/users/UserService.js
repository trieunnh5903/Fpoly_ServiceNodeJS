const userModel = require('./UserModel');
const bcrypt = require('bcryptjs')
const login = async (email, password) => {
    try {
        const user = await userModel.findOne({ email: email });
        if (user) {
            let check = bcrypt.compareSync(password, user.password);
            return check ? user : false;
        }
    } catch (error) {
        console.log("login: " + error);
    }
    return false;
}

const register = async (email, password, name) => {
    try {
        const user = await userModel.findOne({ email: email });
        if (!user) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            const newUser = {
                email: email,
                password: hash,
                name: name
            };
            await userModel.create(newUser);
            return true;
        } else {
            return false;
        }

    } catch (error) {
        console.log("register: " + error);
    }
};

var users = [
    {
        _id: 1,
        email: 'abc@gmail.com',
        password: 'abc',
        name: 'Wallworke'
    },
    {
        _id: 2,
        email: '123@gmail.com',
        password: '123',
        name: 'Screwton'
    },
    {
        _id: 3,
        email: '234@gmail.com',
        password: '234',
        name: 'Screwton'
    }
]
module.exports = { login, register }