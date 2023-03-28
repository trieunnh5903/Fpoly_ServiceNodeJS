const login = async (email, password) => {
    const user = users.find(user => user.email == email);
    if (user && user.password == password){
        return user;
    }
    return null;
}

const register = async (email, password, name) =>{
     try {
        const user = users.find(user => user.email == email);
        if (!user) {
            const newUser = {
                _id : users.length + 1,
                email,
                password,
                name
            };
            users.push(newUser);
            return true;
        }
        return false;
     } catch (error) {
        console.log("register: " + error);
        return false;
     }
};

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
module.exports = {login, register}