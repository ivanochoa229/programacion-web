require('dotenv').config();
const { Sequelize } = require("sequelize");
const dbUsername = process.env.DATABASE_USERNAME;
const dbPassword = process.env.DATABASE_PASSWORD;
const dbName = process.env.DATABASE_NAME;

let seqInstance = null;
const createInstance = async () => {
  const instance = new Sequelize(dbName, dbUsername, dbPassword, {
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