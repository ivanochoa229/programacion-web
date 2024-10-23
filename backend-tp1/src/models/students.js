const { Model, DataTypes } = require("sequelize");

class students extends Model{
    static init = (sequelize) => {
        super.init(
            {
                id: {
                    type:DataTypes.INTEGER,
                    autoIncremente:true,
                    primaryKey: true
                },
                name:{
                    type: DataTypes.STRING,
                    allowNull:false
                },
                lastname:{
                    type: DataTypes.STRING,
                    allowNull:false
                },
                deleted:{
                    type: DataTypes.BOOLEAN,
                    values: [0, 1],
                    defaultValue: 0
                }
            },
            {
                sequelize,
                modelName:'students',
                timestamps: false
            }
        );
        return this;
    };
       
}
module.exports = students;