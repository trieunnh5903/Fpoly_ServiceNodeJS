const userModel = require('./UserModel');
const bcrypt = require('bcryptjs')
const login = async (email, password) => {
    console.log("user login", email, password);
    try {
        const user = await userModel.findOne({ email: email });
        if (user) {
            let check = bcrypt.compareSync(password, user.password);
            console.log(check);
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
        }
        return false;

    } catch (error) {
        console.log("register: " + error);
    }
};

const uploadAvatar = async (id, avatar) => {
    try {
        console.log("+++++++++++++++ " + JSON.stringify(id));
        const user = await userModel.findById(id);
        console.log(">>>>>>>>>>>>>>> + " + JSON.stringify(user));
        if (user) {
            user = {
                ...user, avatar: avatar
            }
            await user.save();
            return true
        }
    } catch (error) {
        console.log("uploadAvatar: " + error);
    }
    return false;

}
module.exports = { login, register, uploadAvatar }