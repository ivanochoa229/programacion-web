const { Model, DataTypes } = require("sequelize");

class Levels extends Model {
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
        modelName: "levels",
        timestamps: true,
        hooks: {
          beforeCreate: (level) => {
            level.updatedAt = null;
          },
          beforeUpdate: (level) => {
            level.updatedAt = new Date();
          },
        },
      }
    );
    return this;
  };

  static associate = (models) => {
    this.belongsTo(models.Careers, {
      foreignKey: "careers_id",
      as: "career",
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

module.exports = Levels;
