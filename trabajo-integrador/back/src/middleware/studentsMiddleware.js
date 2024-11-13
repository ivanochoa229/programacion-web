const validateBody = (req, res, next) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const dniPattern = /^[0-9]{1,10}$/;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const dni = req.body.dni;

  if (!firstname) {
    return res.status(400).json({ message: "firstname field is required." });
  }
  if (!lastname) {
    return res.status(400).json({ message: "lastname field is required." });
  }
  if (!email) {
    return res.status(400).json({ message: "email field is required." });
  }
  if (!dni) {
    return res.status(400).json({ message: "dni field is required." });
  }
  if (!emailPattern.test(email)) {
    return res.status(400).json({ message: "email format is invalid." });
  }
  if (!dniPattern.test(dni)) {
    return res.status(400).json({ message: "dni format is invalid." });
  }

  for (const [key, value] of Object.entries({firstname, lastname , email })) {
    if (value.length > 100) {
      return res.status(400).json({
        message: `${key} field exceeds the max length of 100 characters.`,
      });
    }
  }

  next();
};

const validateBySid = (req, res, next) => {
  if (isNaN(Number(req.params.sid))) {
    res.status(400).json({
      message: "Sid must be a number.",
    });
    return;
  }

  req.params.sid = Number(req.params.sid);

  next();
};

module.exports = {
  validateBody,
  validateBySid,
};
