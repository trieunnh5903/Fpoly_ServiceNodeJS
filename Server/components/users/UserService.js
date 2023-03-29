const userModel = require('./UserModel');

const login = async (email, password) => {
    const user = users.find(user => user.email == email);
    if (user && user.password == password){
        return user;
    }
    return null;
}

var users = [
    {
        _id: 1,
        email: 'abc@gmail.com',
        password: 'abc'
    },
    {
        _id: 2,
        email: '123@gmail.com',
        password: '123'
    },
    {
        _id: 3,
        email: '234@gmail.com',
        password: '234'
    }
]
module.exports = {login}