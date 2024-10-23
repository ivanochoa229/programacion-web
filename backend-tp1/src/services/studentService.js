StudentRepository = require("../repository/studentRepository");

const findAll = async () => {
  try {
    students = await StudentRepository.findAll();
    return students;
  } catch (err) {
    console.log(`studentsService ${err}`);
    throw err;
  }
};

const createStudent = async(student) => {
    try {
        student = await StudentRepository.createStudent(student);
        return student;
    } catch (err) {
        console.log(`studentsService ${err}`);
    throw err;
    }
}

module.exports = { findAll , createStudent};
