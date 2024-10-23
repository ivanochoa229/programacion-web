const { validateBody } = require('../middleware/studentsMiddleware');

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

router.post('/', validateBody, async (req, res) => {
    try{
        const newStudent = await StudentService.createStudent(req.body);
        res.json(newStudent);
    }catch(err){
        res.sendStatus(500);
    }
})

module.exports = router;
