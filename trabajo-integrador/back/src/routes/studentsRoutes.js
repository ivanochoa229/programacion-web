
const { validateBody, validateBySid } = require('../middleware/studentsMiddleware');
const { validateToken } = require('../middleware/usersMiddleware');

StudentService = require('../services/studentService');
express = require('express');

router = express.Router();

router.get('/', validateToken , async (req, res) => {
    try {
        const search = req.query.search || '';
        const page = Number(req.query.page) || 1;
        const pageSize = Number(req.query.pageSize) || 5;
        const students = await StudentService.findAll(search, page, pageSize);
        res.json(students);
    } catch (err) {
        res.sendStatus(500);
    }
});

router.get('/length', validateToken, async (req, res) => {
    try {
        const length = await StudentService.lengthStudent();
        res.json(length);
    } catch (err) {
        res.sendStatus(500);
    }
});




router.get('/:sid', validateToken, validateBySid, async (req, res) => {
    try {
        const student = await StudentService.findById(Number(req.params.sid));
        if(!student){
            return res.status(404).json({
                message:`Student not found with sid = ${req.params.sid}`
            });
        }
        res.json(student);
    } catch (err) {
        res.sendStatus(500);
    }
});


router.post('/', validateToken, validateBody, async (req, res) => {
    try{
        const newStudent = await StudentService.createStudent(req.body);
        res.json(newStudent);
    }catch(err){
        res.sendStatus(500);
    }
});

router.put('/:sid', validateToken, validateBySid, validateBody, async(req, res) => {
    try {
        const updatedStudent = await StudentService.updateStudent(req.body, Number(req.params.sid));
        res.sendStatus(204);
    } catch (err) {
        if (err.message === 'Student not found or deleted') {
            return res.status(404).json({
              message: `Student not found with sid = ${req.params.sid}`,
            });
          }
        console.log(`Error: ${err}`);
        res.sendStatus(500);
    }
})

router.delete('/:sid', validateToken, validateBySid, async(req, res) => {
    try {
        const student = await StudentService.deleteStudent(req.params.sid)
        if(!student){
            return res.status(404).json({
                message:`Student not found with id = ${req.params.sid}`
             });
        };
        res.sendStatus(204);
    } catch (err) {
        console.log(`Error: ${err}`);
        res.sendStatus(500);
    }
})

module.exports = router;
