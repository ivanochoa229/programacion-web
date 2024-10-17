const { Sequelize } = require("sequelize");
let seqInstance = null;
const createInstance = async () => {
  const instance = new Sequelize("mydb", "root", "", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 3,
    },
  });
  try {
    await instance.authenticate();
    console.log("Connection has been established successfully.");
    return instance;
  } catch (error) {
    console.log(error);
    throw new Error("Unable to connect to database");
  }
};

const getSeqInstance = async () => {
  if (!seqInstance) {
    seqInstance = await createInstance();
  }
  return seqInstance;
};
module.exports = {
  createInstance,
  getSeqInstance,
};