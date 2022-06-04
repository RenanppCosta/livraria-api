'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('livros', 
    {
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      titulo:{
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      total_paginas:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      autor:{
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      ano_lancamento:{
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
      },
      estoque:{
        type: Sequelize.DataTypes.INTEGER(10),
        allowNull: false
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    });
     
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('livros');
     
  }
};
