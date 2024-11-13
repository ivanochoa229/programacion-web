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
  
  
  module.exports = {
    validateBody
  };
  