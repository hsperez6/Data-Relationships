'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Person extends Sequelize.Model {}
  Person.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, { sequelize });

  Person.associate = (models) => {
    // TODO Add associations.
    
    Person.hasMany(models.Movie, {
      as: 'director',
      foreignKey: {
        fieldName: 'directorPersonId',
        field: 'directorPersonId',
        allowNull: false,
      },
    });

    Person.belongsToMany(models.Movie, {
      as: 'actor',
      through: 'MovieActors',
      foreignKey: 'personId',
      otherKey:'movieId'
    });

  };

  return Person;
};
