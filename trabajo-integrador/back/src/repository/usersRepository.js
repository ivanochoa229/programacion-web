const bcrypt = require('bcrypt');
const Users = require('../models/users');
const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);

const findById = async (id) => {
    return await Users.findOne({
      where: {
        deleted: 0,
        id,
      },
      attributes: {
        exclude: "deleted, createdUp, updatedAt",
      },
    });
  };

  const createUser = async (user) => {
    try {
      const existingUser = await Users.findOne({
        where: {
            username: user.username
        }
      });
  
      if (existingUser) {
        const error = new Error(`El usuario con el username ${user.username} ya se encuentra registrado.`);
         error.status = 400;  
        throw error;
      }
  
      const hashedPassword = await bcrypt.hash(user.password, saltRounds);
      user.password = hashedPassword;
      user.createdAt = new Date(); 
      const newUser = await Users.create(user);
      return newUser;
    } catch (err) {
      console.log(`usersRepository ${err}`);
      throw err;
    }
  };

  module.exports = {findById, createUser};