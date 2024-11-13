UsersRepository = require('../repository/usersRepository');
const bcrypt = require('bcrypt');

const createUser = async(user) => {
    try {

        const existingUser = await findByUsername(user.username);

        if (existingUser) {
            const error = new Error(`El usuario ${user.username} ya se encuentra registrado.`);
             error.status = 400;  
            throw error;
          }

        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        user.password = hashedPassword;
        user.createdAt = new Date(); 
        const newUser = await UsersRepository.createUser(user);
        return newUser;

    } catch (err) {
        console.log(`UsersService ${err}`);
        throw err;
    }
}

const findByUsername = async (username) => {
    try {
      student = await StudentRepository.findByUsername(username);
      return student;
    } catch (err) {
      console.log(`studentsService ${err}`);
      throw err;
    }
  }

module.exports = {createUser};