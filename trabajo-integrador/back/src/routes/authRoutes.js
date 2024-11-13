const { validateBody } = require('../middleware/usersMiddleware');

express = require('express');
UsersService = require('../services/usersService');
router = express.Router();

router.post('/login', validateBody, async(req, res) => {
    try {

      const response = await UsersService.loginUser(req.body);
      res.status(200).json(response);

    } catch (err) {
      if (err.status === 400) {
        res.status(400).json({ message: err.message });
      } else {
        res.status(500).json({ message: 'Error del servidor' });
      }
    }
});

router.post('/register', validateBody,  async (req, res) => {
    try{
        const response = await UsersService.createUser(req.body);
        res.status(201).json(response);
    }catch (err) {
        if (err.status === 400) {
          res.status(400).json({ message: err.message });
        } else {
          res.status(500).json({ message: 'Error del servidor' });
        }
      }
});
module.exports = router;