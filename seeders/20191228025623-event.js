'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('events', [
      {
        title: "Raisa",
        category_id: "2",
        user_id: 1,
        startTime: new Date(),
        endTime: "2019-12-30",
        price: "0",
        description: "Lorem",
        address: "Permata Bintaro",
        urlMaps: "XXX",
        image: "XXX",
        CreatedAt: new Date,
        updatedAt: new Date
      },
      {
        title: "Sheila On 7",
        category_id: "2",
        user_id: 1,
        startTime: new Date(),
        endTime: "2019-12-30",
        price: "300000",
        description: "Lorem",
        address: "Permata Bintaro",
        urlMaps: "XXX",
        image: "XXX",
        CreatedAt: new Date,
        updatedAt: new Date
      },
      {
        title: "ReactJs",
        category_id: "4",
        user_id: 1,
        startTime: new Date(),
        endTime: "2019-12-30",
        price: "0",
        description: "Lorem",
        address: "Permata Bintaro",
        urlMaps: "XXX",
        image: "XXX",
        CreatedAt: new Date,
        updatedAt: new Date
      },
      {
        title: "Badminton",
        category_id: "1",
        user_id: 1,
        startTime: new Date(),
        endTime: "2019-12-30",
        price: "0",
        description: "Lorem",
        address: "Permata Bintaro",
        urlMaps: "XXX",
        image: "XXX",
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
