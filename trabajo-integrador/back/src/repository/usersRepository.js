
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
  
      await Users.create(user);
      const newUser = await findByUsername(user.username);
      return newUser;
     
    } catch (err) {
      console.log(`usersRepository ${err}`);
      throw err;
    }
  };

  const findByUsername = async (user) => {
    return await Users.findOne({
      where: {
        deleted: 0,
        username: user,
      },
      attributes: {
        exclude: "deleted, createdUp, updatedAt",
      },
    });
  };

  module.exports = {findById, createUser, findByUsername};