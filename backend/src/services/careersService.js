const Careers = require("../models/careers");
let careers = [];

// Método para crear una nueva carrera
const createCareer = (name, accredited) => {
  const newCareer = new Careers(careers.length + 1, name, accredited);
  careers.push(newCareer);
  return newCareer;
};

// Método para obtener todas las carreras no eliminadas
const getCareers = () => {
  return careers.filter((career) => !career.deleted);
};

const findById = (id) => {
  const careersFound = careers.find((c) => c.id === id && c.deleted === false);
  if (!careersFound) {
    return;
  }
  return careersFound;
};

const update = (id, newCareer) => {
  const careersFound = careers.find((c) => c.id === id && c.deleted === false);
  if (!careersFound) {
    return `La carrera con el id ${id} no existe`;
  }
  careersFound.name = newCareer.name;
  careersFound.accredited = newCareer.accredited ?? careersFound.accredited;
  return careersFound;
};

// Método para eliminar una carrera (marcar como eliminada)
const deleteCareer = (id) => {
  careers = careers.map((career) => {
    if (career.id === id) {
      return { ...career, deleted: 1 };
    }
    return career;
  });
};

// Método para obtener el arreglo completo de carreras (incluso las eliminadas)
const getCareersArray = () => {
  return careers;
};

module.exports = { getCareers, findById, update, deleteCareer, createCareer };
