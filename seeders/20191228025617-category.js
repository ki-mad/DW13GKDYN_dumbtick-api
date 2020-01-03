'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        name:"Sport",
        CreatedAt: new Date,
        updatedAt: new Date
      },
      {
        name:"Music",
        CreatedAt: new Date,
        updatedAt: new Date
      } ,
      {
        name:"Science",
        CreatedAt: new Date,
        updatedAt: new Date
      },
      {
        name:"Programming",
        CreatedAt: new Date,
        updatedAt: new Date
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
