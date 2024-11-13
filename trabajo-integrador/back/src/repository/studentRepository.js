const Students = require("../models/students");
const { Sequelize } = require("sequelize");

const findAll = async (search, page, pageSize) => {
  try{
    const limit = pageSize; 
    const offset = (page - 1) * pageSize;
    const searchCondition = search ? {
      lastname: { [Sequelize.Op.like]: `%${search}%` }
    } : {};
    return await Students.findAll({
      where: {
        deleted: 0,
        ...searchCondition
      },
      limit,
      offset,
      attributes: {
        exclude: "deleted, createdAt, updatedAt",
      },
    });
  }catch(err){
    console.error("Database error:", err);
    throw err;
  }
};

const getAll = async () => {
  return await Students.findAll();
};


const findBySid = async (id) => {
  return await Students.findOne({
    where: {
      deleted: 0,
      sid,
    },
    attributes: {
      exclude: "deleted, createdUp, updatedAt",
    },
  });
};

const createStudent = async (student) => {
  try {
    // Verificar si ya existe un estudiante con el mismo email o dni
    const existingStudent = await Students.findOne({
      where: {
        [Sequelize.Op.or]: [
          { email: student.email },
          { dni: student.dni }
        ],
        deleted: 0
      }
    });

    if (existingStudent) {
      throw new Error('El alumno con este correo electrónico o DNI ya existe.');
    }

    // Obtener el último valor de sid y sumarle 1
    const lastStudent = await Students.findOne({
      where: { deleted: 0 },
      order: [['sid', 'DESC']]
    });

    const newSid = lastStudent ? lastStudent.sid + 1 : 1;

    student.sid = newSid;
    student.createdAt = new Date(); 
    const newStudent = await Students.create(student);
    return newStudent;
  } catch (err) {
    console.log(`studentsRepository ${err}`);
    throw err;
  }
};

const updateStudent = async (payload, sid) => {
  payload.updatedAt = new Date();
  const [rowsUpdated] = await Students.update(payload, {
    where: {
      deleted:0,
      sid
    },
  });
  return rowsUpdated;
};

const deleteStudent = async(sid) => {
  return await Students.update({deleted:1}, {
      where:{
        sid
      }
  })
}


const lengthStudent = async () => {
  const students = await Students.findAll({
    where: {
      deleted: 0
    },
    attributes: {
      exclude: "deleted, createdAt, updatedAt",
    },
  });
  return students.length;
}

module.exports = { findAll, findBySid, createStudent, updateStudent, deleteStudent,  lengthStudent, getAll };
