const { Model, DataTypes } = require("sequelize");

class students extends Model {
  static init = (sequelize) => {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncremente: true,
          primaryKey: true,
        },
        firstname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        deleted: {
          type: DataTypes.BOOLEAN,
          values: [0, 1],
          defaultValue: 0,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        dni: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        sid: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "students",
        timestamps: false,
      }
    );
    return this;
  };


}
module.exports = students;
