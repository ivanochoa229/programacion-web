const Levels = require("../models/levels");
const careerService = require("./careersService");

const findAll = async () => {
  try {
    const levels = await Levels.getAll();
    return levels;
  } catch (error) {
    console.log(`LevelsService ${error}`);
    throw error;
  }
};

const findAllByCareer = async (id) => {
  try {
    return await Levels.findAll({
      where: { careers_id: id, deleted: 0 },
    });
  } catch (error) {
    console.log(`LevelsService ${error}`);
    throw error;
  }
};

const findById = async (id) => {
  try {
    const level = await Levels.getById(id);
    return level;
  } catch (error) {
    console.log(`LevelsService ${error}`);
    throw error;
  }
};

const create = async ({ name, careers_id }) => {
  try {
    const career = await careerService.findById(careers_id);
    if (!career) {
      throw new Error("Career not found");
    }
    const level = await Levels.create({ name, careers_id });
    return level;
  } catch (error) {
    console.log(`LevelsService ${error}`);
    throw error;
  }
};

const update = async (id, updateLevel) => {
  try {
    const level = await Levels.getById(id);
    if (!level) {
      throw new Error("Level not found");
    }
    await Levels.update(
      { name: updateLevel.name },
      {
        where: { id },
      }
    );
    const updatedLevelData = await Levels.getById(id);
    return updatedLevelData;
  } catch (error) {
    console.log(`LevelsService ${error}`);
    throw error;
  }
};

const deleteLevel = async (id) => {
  try {
    const level = await Levels.getById(id);
    if (!level) {
      throw new Error("Level not found");
    }
    await Levels.update(
      { deleted: 1 },
      {
        where: { id },
        silent: true,
      }
    );
    return;
  } catch (error) {
    console.log(`LevelsService ${error}`);
    throw error;
  }
};

module.exports = { findAll, findById, create, update, deleteLevel, findAllByCareer };
