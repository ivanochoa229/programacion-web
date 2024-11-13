UsersRepository = require('../repository/usersRepository');
const bcrypt = require('bcrypt');
JwtService = requiere('jwtService');

const createUser = async(user) => {
    try {

        const existingUser = await findByUsername(user.username);

        if (!existingUser) {
            const error = new Error(`El usuario ${user.username} ya existe.`);
             error.status = 400;  
            throw error;
          }

        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        user.password = hashedPassword;
        user.createdAt = new Date(); 
        const newUser = await UsersRepository.createUser(user);
        response = serializeReponse(newUser);
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

    response = serializeReponse(existentUser);
    return response;

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

  const serializeReponse = (user) => {

    token = JwtService.generateToken(user);

        response = {
            username: newUser.username,
            date: newUser.createdAt,
            jwt: token
        }
  }

module.exports = {createUser, loginUser};