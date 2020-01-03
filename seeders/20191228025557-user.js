'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('users', [
      {
        name: 'Monsphiet',
        email: 'monsphiet@yahoo.com',
        username: 'Monsphiet',
        password: 'monsphiet123',
        phonenumber: 12345678,
        image: "xxx",
        CreatedAt: new Date,
        updatedAt: new Date
      }, 
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
