require('dotenv').config();
const UsersRepository = require('../repository/usersRepository');
const bcrypt = require('bcrypt');
const JwtService = require('./jwtService');
const saltRounds = parseInt(process.env.SALT_ROUNDS);

const createUser = async(user) => {
    try {

        const existingUser = await findByUsername(user.username);

        if (existingUser) {
            const error = new Error(`El usuario ${user.username} ya existe.`);
             error.status = 400;  
            throw error;
          }

        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        user.password = hashedPassword;
        user.createdAt = new Date(); 
        const newUser = await UsersRepository.createUser(user);
        response = serializeResponse(newUser);
        return response;

    } catch (err) {
        console.log(`UsersService ${err}`);
        throw err;
    }
}

const loginUser = async(user) => {

    existentUser = await UsersRepository.findByUsername(user.username);

    if (!existentUser) {
        const error = new Error(`El usuario ${user.username} no existe.`);
        error.status = 400;  
        throw error;
      }

    const isValid = await bcrypt.compare(user.password, existentUser.password);

    if(!isValid){
        const error = new Error(`nombre de usuario o contraseña invalida`);
        error.status = 400;  
        throw error;
    }

    response = serializeResponse(existentUser);
    return response;

} 

const findByUsername = async (username) => {
    try {
      user = await UsersRepository.findByUsername(username);
      return user;
    } catch (err) {
      console.log(`usersService ${err}`);
      throw err;
    }
  }

  const serializeResponse = (user) => {

    token = JwtService.generateToken(user);

        return response = {
            username: user.username,
            date: user.createdAt,
            jwt: token
        }
  }

module.exports = {createUser, loginUser};