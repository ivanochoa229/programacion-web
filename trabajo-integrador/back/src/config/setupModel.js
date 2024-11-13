const { getSeqInstance } = require("./setupDb");
const Students = require('../models/students');
const Users = require('../models/users');
const setupModel = async () => {
    const instanceDb = await getSeqInstance();
    Students.init(instanceDb);
    Users.init(instanceDb);
}
setupModel();