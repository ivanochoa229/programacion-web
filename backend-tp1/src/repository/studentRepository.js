const Students = require("../models/students");

const findAll = async () => {
  return await Students.findAll({
    where: {
      deleted: 0,
    },
    attributes: {
      exclude: "deleted, createdAt, updatedAt",
    },
  });
};

const findById = async (id) => {
  return await Students.findOne({
    where: {
      deleted: 0,
      id,
    },
    attributes: {
      exclude: "deleted, createdUp, updatedAt",
    },
  });
};

const createStudent = async (student) => {
  return await Students.create({
    name: student.name,
    lastname: student.lastname,
  });
};

const updateStudent = async (payload, id) => {
  const [rowsUpdated] = await Students.update(payload, {
    where: {
      deleted:0,
      id
    },
  });
  return rowsUpdated;
};

const deleteStudent = async(id) => {
  return await Students.update({deleted:1}, {
      where:{
        id
      }
  })
}

module.exports = { findAll, findById, createStudent, updateStudent, deleteStudent };
