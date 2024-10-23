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

const findById = async (id) => {
  try {
    student = await StudentRepository.findById(id);
    return student;
  } catch (err) {
    console.log(`studentsService ${err}`);
    throw err;
  }
}

const createStudent = async(student) => {
    try {
        student = await StudentRepository.createStudent(student);
        return student;
    } catch (err) {
        console.log(`studentsService ${err}`);
        throw err;
    }
}

const updateStudent = async (payload, id) => {
  try{
    const rowsUpdated = await StudentRepository.updateStudent({name:payload.name , lastname:payload.lastname}, id);
    if (rowsUpdated === 0) {
      throw new Error('Student not found or deleted');
    }
    return rowsUpdated;
  }catch(err){
    console.log(`studentsService ${err}`);
    throw err;
  }
}

const deleteStudent = async (id) => {
  try {
    await StudentRepository.deleteStudent(id);
    return true;
  } catch (error) {
    console.log(`studentsService ${err}`);
    throw err;
  }
}

module.exports = { deleteStudent,findAll , findById,createStudent, updateStudent};
