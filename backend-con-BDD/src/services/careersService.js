const Careers = require("../models/careers");
const {deleteLevel, findAllByCareer} = require('./levelsService');

const findAll = async () => {
  try {
    const career = await Careers.getAll();
    return career;
  } catch (error) {
    console.log("careersService " + error);
    throw error;
  }
};

const findById = async (id) => {
  try {
    const career = await Careers.getById(id);
    return career;
  } catch (error) {
    console.log("careersService " + error);
    throw error;
  }
};

const create = async (career) => {
  try {
    const newCareer = await Careers.create({ name: career.name });
    return newCareer;
  } catch (error) {
    console.error("careersServices: " + error);
    throw error;
  }
};

const update = async (id, newCareer) => {
  try {
    const career = await Careers.getById(id); 
    if (!career) {
      throw new Error("Career not found");
    }
    career.name = newCareer.name;
    await career.save();
    return career;
  } catch (error) {
    console.error("careersServices: " + error);
    throw error;
  }
};

const deleteCareer = async (id) => {
  try {
    const career = await Careers.getById(id);
    if (!career) {
      throw new Error("Career not found");
    }
    const levels = await findAllByCareer(id);
    levels.forEach(async (level) => {
      await deleteLevel(level.id); 
    });
    await Careers.update(
      { deleted: 1 },
      {
        where: { id },
        silent: true, 
      }
    );
    return;
  } catch (error) {
    console.error("careersServices: " + error);
    throw error;
  }
};

module.exports = { findAll, findById, create, update, deleteCareer };
