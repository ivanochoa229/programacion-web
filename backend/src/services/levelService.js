const Levels = require("../models/levels");
const careersService = require("../services/careersService");
let levels = [];

const createLevel = (name, id_career) => {
  const careerFound = careersService.findById(id_career);
  console.log(careerFound);
  if (!careerFound) {
    return `La carrera con el id ${id_career} no existe`;
  } else {
    const newLevel = new Levels(levels.length + 1, name, id_career);
    levels.push(newLevel);
    return newLevel;
  }
};

const findAll = () => {
  return levels.filter(l => !l.deleted);
};

const findById = (id) => {
  const levelFound = levels.find((l) => (l.id === id && !l.deleted));
  if (!levelFound) {
    return `El nivel con el ${id} no existe`;
  }
  return levelFound;
};

const deleteById = (id) => {
  levels = levels.map((level) => {
    if (level.id === id) {
      return { ...level, deleted: 1 };
    }
    return level;
  });
};

const update = (id, { name, id_career }) => {
    const newLevel = levels.find((l) => l.id === id);
    if (!newLevel) {
      return `El nivel con el ${id} no existe`;
    }
  
    if (id_career && !isCareerValid(id_career)) {
      return `La carrera con el id ${id_career} no existe`;
    }
  
    return updateLevel(newLevel, { name, id_career });
  };
  
  const isCareerValid = (id_career) => {
    return careersService.findById(id_career) !== undefined;
  };
  
  const updateLevel = (level, { name, id_career }) => {
    level.name = name;
    if (id_career) {
      level.id_career = id_career;
    }
    return level;
  };

module.exports = { createLevel, findAll, findById, deleteById, update };
