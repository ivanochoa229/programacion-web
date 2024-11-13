JwtService = require('jwtService');

const validateBody = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
  
    if (!username) {
      return res.status(400).json({ message: "username field is required." });
    }
    if (!password) {
      return res.status(400).json({ message: "password field is required." });
    }
  
    next();
  };

const validateToken = (req, res, next) => {

  const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Authentication required' });
    }

    if(!JwtService.validateToken(token)){
      return res.status(401).json({ message: 'Authentication required' });
    }

    next();
}
  
  
  module.exports = {
    validateBody,
    validateToken
  };
  