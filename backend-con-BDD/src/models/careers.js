const { Model, DataTypes } = require("sequelize");
const Levels = require("./levels");

class Careers extends Model {
  static init = (sequelize) => {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        deleted: {
          type: DataTypes.TINYINT,
          values: [0, 1],
          defaultValue: 0,
        },
        createdAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        sequelize,
        modelName: "careers",
        timestamps: true, // Activa los timestamps para que Sequelize maneje createdAt y updatedAt automáticamente
        hooks: {
          beforeCreate: (career) => {
            career.updatedAt = null; // Establece updatedAt como null antes de crear el registro
          },  
          beforeUpdate: (career) => {
            career.updatedAt = new Date(); // Actualiza updatedAt antes de guardar los cambios
          }
        },
      }
    );
    return this;
  };

  static associate = (models) => {
    this.hasMany(models.Levels, {
      foreignKey: "careers_id",
      as: "levels",
    });
  };

  static getAll = async () => {
    return await this.findAll({
      where: {
        deleted: "0",
      },
      attributes: {
        exclude: "deleted, createdAt, updatedAt",
      },
      include: {
        model: Levels,
        as: "levels",
        attributes: {
          exclude: "deleted, createdAt, updatedAt",
        },
      },
    });
  };


  static getById = async (id) => {
    return await this.findOne({
      where: {
        id: id,
        deleted: 0,
      },
      attributes: {
        exclude: "deleted, createdAt, updatedAt",
      },
    });
  };
}
module.exports = Careers;
