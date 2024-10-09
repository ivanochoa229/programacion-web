const express = require("express");
const {
  findAll,
  findById,
  create,
  update,
  deleteCareer,
} = require("../services/careersService");
const router = express.Router();

const validateBody = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({
      message: "name field is required.",
    });
    return;
  }
  next();
};

router.get("/", async (req, res) => {
  try {
    const careers = await findAll();
    res.json(careers);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const career = await findById(Number(req.params.id));

    if (!career) {
      res.status(404).json({
        message: "Career not found",
      });
      return;
    }

    res.json(career);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post("/", validateBody, (req, res) => {
  const newCareer = create(req.body);
  res.json(newCareer);
});

router.put("/:id", async (req, res) => {
  try {
    const updatedCareer = await update(Number(req.params.id), req.body);

    if (!updatedCareer) {
      res.status(404).json({
        message: "Career not found",
      });
      return;
    }
    res.json(updatedCareer);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await deleteCareer(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
