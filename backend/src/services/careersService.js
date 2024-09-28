const Careers = require("../models/careers");
let careers = [];

class CareersService {
  // Método para crear una nueva carrera
  static createCareer(name, accredited) {
    const newCareer = new Careers(careers.length + 1, name, accredited);
    careers.push(newCareer);
    return newCareer;
  }

  // Método para obtener todas las carreras no eliminadas
  static getCareers() {
    return careers.filter((career) => !career.deleted);
  }

  static findById(id) {
    const careersFound = careers.find(
      (c) => c.id === id && c.deleted === false
    );
    if (!careersFound) {
      return `La carrera con el id ${id} no existe`;
    }
    return careersFound;
  }

  static update(id, newCareer) {
    const careersFound = careers.find(
      (c) => c.id === id && c.deleted === false
    );
    if (!careersFound) {
      return `La carrera con el id ${id} no existe`;
    }
    careersFound.name = newCareer.name;
    careersFound.accredited = newCareer.accredited ?? careersFound.accredited;
    return careersFound;
  }

  // Método para eliminar una carrera (marcar como eliminada)
  static deleteCareer(id) {
    careers = careers.map((career) => {
      if (career.id === id) {
        return { ...career, deleted: 1 };
      }
      return career;
    });
  }

  // Método para obtener el arreglo completo de carreras (incluso las eliminadas)
  static getCareersArray() {
    return careers;
  }
}

module.exports = CareersService;
