const express = require("express");
const router = express.Router();
const CareersService = require("../services/careersService");

// Ruta para obtener todas las carreras
router.get("/", (req, res) => {
  const careers = CareersService.getCareers();
  res.json(careers);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const career = CareersService.findById(parseInt(id, 10));
  res.json(career);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const newCareer = req.body;
  const career = CareersService.update(parseInt(id, 10), newCareer);
  if (!career) {
    return res.status(404).json({ error: `La carrera con id ${id} no existe o ha sido eliminada` });
  }
  res.json(career);
});

// Ruta para crear una nueva carrera
router.post("/", (req, res) => {
  const { name, accredited } = req.body;
  const newCareer = CareersService.createCareer(name, accredited);
  res.json(newCareer);
});

// Ruta para eliminar una carrera (marcar como eliminada)
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  CareersService.deleteCareer(parseInt(id, 10));
  res.sendStatus(204); // 204 No Content
});

module.exports = router;
