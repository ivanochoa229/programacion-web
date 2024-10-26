const validateBody = (req, res, next) => {
    if (!req.body.firstname) {
        res.status(400).json({
            message: 'name field is required.'
        });
  
        return;
    }
  
    next();
  };
  
  const validateBySid = (req, res, next) => {
    
    if (isNaN(Number(req.params.sid))) {
        res.status(400).json({
          message: 'Sid must be a number.'
      });
        return;
    }
  
    req.params.sid = Number(req.params.sid);
  
    next();
  };

  
  module.exports = {
    validateBody,
    validateBySid
  }