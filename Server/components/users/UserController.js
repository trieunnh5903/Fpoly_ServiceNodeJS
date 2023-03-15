const userService = require('./UserService');

const login = async (email, password) => {
    return await userService.login(email, password);
}

module.exports = {login}