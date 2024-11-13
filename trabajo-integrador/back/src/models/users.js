const { Model, DataTypes } = require("sequelize");

class users extends Model {
  static init = (sequelize) => {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncremente: true,
          primaryKey: true,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        deleted: {
          type: DataTypes.BOOLEAN,
          values: [0, 1],
          defaultValue: 0,
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
        modelName: "users",
        timestamps: false,
      }
    );
    return this;
  };

}

module.exports = users;
