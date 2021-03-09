const { Model, DataTypes } = require('sequelize');
const  sequelize          = require('../db');

class Usuario extends Model {}

Usuario.init({
    id:{
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true
 },
    nombre:DataTypes.STRING(100),
    username:DataTypes.STRING(50),
    password:DataTypes.STRING(20)
}, {
  sequelize: sequelize,
  modelName:'Usuario',
  freezeTableName: true  
 }
);
module.exports = Usuario;