const Students = require('../models/students');

const findAll = async () => {
    return await Students.findAll({
        attributes: {
            exclude: "createdAt, updatedAt",
          }
    });
}

const createStudent = async (student) => {
    return await Students.create({name: student.name , lastname:student.lastname});
}


module.exports = {findAll,  createStudent};