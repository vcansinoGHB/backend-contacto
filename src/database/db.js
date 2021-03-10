const { Sequelize, Model } = require('sequelize');
const { database } = require('../config');

const Op = Sequelize.Op;
const operatorsAliases = {
  $like: Op.like,
  $not: Op.not
}

const sequelize = new Sequelize(database.database,
                                database.username,
                                database.password,
                                {
                                  host:database.host,
                                  dialect:"postgres",
                                  operatorsAliases
                                }
                               );

module.exports = sequelize;