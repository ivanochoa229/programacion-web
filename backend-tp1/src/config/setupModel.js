const { getSeqInstance } = require("./setupDb");
const Students = require('../models/students');
const setupModel = async () => {
    const instanceDb = await getSeqInstance();
    Students.init(instanceDb);
}
setupModel();