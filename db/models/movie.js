'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    releaseYear: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }, { sequelize });

  Movie.associate = (models) => {
    // TODO Add associations.

    Movie.belongsTo(models.Person, {
      as: 'director',
      foreignKey: {
        fieldName: 'directorPersonId',
        allowNull: false,
      },
    });

    Movie.belongsToMany(models.Person, {
      through: 'ActorMovies',
      as: 'actor',
      // foreignKey: {
      //   fieldName: 'actorPersonId',
      //   allowNull: false,
      // },
    });

  };

  return Movie;
};
