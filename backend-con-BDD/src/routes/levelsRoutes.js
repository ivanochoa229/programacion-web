const express = require("express");
const {
  findAll,
  findById,
  create,
  update,
  deleteLevel,
} = require("../services/levelsService");
const router = express.Router();

const validateBody = (req, res, next) => {
  if (!req.body) {
    res.status(400).json({
      message: "Fields are required.",
    });
    return;
  }
  next();
};

router.get("/", async (req, res) => {
  try {
    const levels = await findAll();
    res.json(levels);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const levels = await findById(Number(req.params.id));

    if (!levels) {
      res.status(404).json({
        message: "Level not found",
      });
      return;
    }
    res.json(levels);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post("/", validateBody, async (req, res) => {
  const newLevel = create(req.body);
  res.json(newLevel);
});

router.put("/:id", async (req, res) => {
  try {
    const level = await update(Number(req.params.id), req.body);
    res.json(level);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
   try {
      await deleteLevel(Number(req.params.id));
      res.sendStatus(204);
   } catch (error) {
      res.status(500).send("Server error");;
   }
});

module.exports = router;
