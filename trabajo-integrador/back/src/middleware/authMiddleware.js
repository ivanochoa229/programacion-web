const {validateToken} = require('../services/jwtService');
const validateTokens = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }
  try {
        jwt.verify(token, secretKey);
        next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
module.exports = {
    validateTokens
  };
