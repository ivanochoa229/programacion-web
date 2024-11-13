const { validateBody } = require('../middleware/usersMiddleware');
const jwtService = requiere('jwtService');

express = require('express');
UsersService = require('../services/usersService');
router = express.Router();

router.get('/login', (req, res) => {
    try {
        username = req.body.username;
        password = req.body.password;
        
    } catch (err) {
        
    }
});

router.post('/register', validateBody,  async (req, res) => {
    try{
        const newUser = await UsersService.createUser(req.body);
        res.status(201).json(newUser);
    }catch (err) {
        if (err.status === 400) {
          res.status(400).json({ message: err.message });
        } else {
          res.status(500).json({ message: 'Error del servidor' });
        }
      }
});
module.exports = router;