UsersRepository = require('../repository/usersRepository');

const createUser = async(user) => {
    try {
        const newUser = await UsersRepository.createUser(user);
        return newUser;
    } catch (err) {
        console.log(`UsersService ${err}`);
        throw err;
    }
}
module.exports = {createUser};