const { validateBody, validateById } = require('../middleware/studentsMiddleware');

StudentService = require('../services/studentService');
express = require('express');

router = express.Router();

router.get('/', async (req, res) => {
    try {
        const students = await StudentService.findAll();
        res.json(students);
    } catch (err) {
        res.sendStatus(500);
    }
});

router.get('/:id', validateById, async (req, res) => {
    try {
        const student = await StudentService.findById(Number(req.params.id));
        if(!student){
            return res.status(404).json({
                message:`Student not found with id = ${req.params.id}`
            });
        }
        res.json(student);
    } catch (err) {
        res.sendStatus(500);
    }
});

router.post('/', validateBody, async (req, res) => {
    try{
        const newStudent = await StudentService.createStudent(req.body);
        res.json(newStudent);
    }catch(err){
        res.sendStatus(500);
    }
});

router.put('/:id', validateById, validateBody, async(req, res) => {
    try {
        const updatedStudent = await StudentService.updateStudent(req.body, Number(req.params.id));
        res.sendStatus(204);
    } catch (err) {
        if (err.message === 'Student not found or deleted') {
            return res.status(404).json({
              message: `Student not found with id = ${req.params.id}`,
            });
          }
        console.log(`Error: ${err}`);
        res.sendStatus(500);
    }
})

router.delete('/:id', validateById, async(req, res) => {
    try {
        const student = await StudentService.deleteStudent(req.params.id)
        if(!student){
            return res.status(404).json({
                message:`Student not found with id = ${req.params.id}`
             });
        };
        res.sendStatus(204);
    } catch (err) {
        console.log(`Error: ${err}`);
        res.sendStatus(500);
    }
})

module.exports = router;
