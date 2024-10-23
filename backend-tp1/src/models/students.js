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