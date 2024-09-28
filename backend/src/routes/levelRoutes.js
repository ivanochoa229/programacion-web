const express = require("express");
const router = express.Router();
const {
  createLevel,
  findAll,
  findById,
  deleteById,
  update,
} = require("../services/levelService");

router.get("/", (req, res) => {
  const levels = findAll();
  res.json(levels);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const level = findById(parseInt(id, 10));
  if (!level) {
    res.status(404).json(`El nivel con el id ${id} no existe`);
  }
  res.json(level);
});

router.post("/", (req, res) => {
  const { name, id_career } = req.body;
  const level = createLevel(name, parseInt(id_career, 10));
  res.json(level);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const level = update(parseInt(id, 10), req.body);
  if (!level) {
    res.status(404).json(`El nivel con el id ${id} no existe`);
  }
  res.json(level);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  deleteById(parseInt(id, 10));
  res.sendStatus(204);
});

module.exports = router;
