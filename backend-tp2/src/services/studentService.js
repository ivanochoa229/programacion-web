StudentRepository = require("../repository/studentRepository");

const findAll = async (search, page, pageSize) => {
  try {
    students = await StudentRepository.findAll(search, page, pageSize);
    return students;
  } catch (err) {
    console.log(`studentsService ${err}`);
    throw err;
  }
};

const findBySid = async (sid) => {
  try {
    student = await StudentRepository.findBySid(id);
    return student;
  } catch (err) {
    console.log(`studentsService ${err}`);
    throw err;
  }
}


const createStudent = async(student) => {
    try {
        const newStudent = await StudentRepository.createStudent(student);
        return newStudent;
    } catch (err) {
        console.log(`studentsService ${err}`);
        throw err;
    }
}

const updateStudent = async (payload, sid) => {
  try{
    const rowsUpdated = await StudentRepository.updateStudent({firstname:payload.firstname , lastname:payload.lastname, email:payload.email, dni:payload.dni}, sid);
    if (rowsUpdated === 0) {
      throw new Error('Student not found or deleted');
    }
    return rowsUpdated;
  }catch(err){
    console.log(`studentsService ${err}`);
    throw err;
  }
}

const deleteStudent = async (sid) => {
  try {
    await StudentRepository.deleteStudent(sid);
    return true;
  } catch (err) {
    console.log(`studentsService ${err}`);
    throw err;
  }
}

const  lengthStudent = async() => {
  try {
    return await StudentRepository.lengthStudent();
  } catch (err) {
    console.log(`studentsService ${err}`);
    throw err;
  }
}

module.exports = { deleteStudent,findAll , findBySid,createStudent, updateStudent,  lengthStudent};
