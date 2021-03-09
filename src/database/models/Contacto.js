const { Model, DataTypes } = require('sequelize');
const  sequelize          = require('../db');

class Contacto extends Model {}

Contacto.init({
       id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
       nombre_completo:DataTypes.STRING(20),
       apellidos:DataTypes.STRING(50),
       telefono:DataTypes.STRING(20),
       correo:DataTypes.STRING(30),
       foto:DataTypes.STRING(150),
       fecha_captura:DataTypes.DATE
    }, {
     sequelize: sequelize,
     modelName:'Contacto',
     freezeTableName: true  
    }
);
module.exports = Contacto;