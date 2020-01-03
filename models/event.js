'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
    title: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    startTime: DataTypes.INTEGER,
    endTime: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    address: DataTypes.STRING,
    urlMaps: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  event.associate = function(models) {
    // associations can be defined here
    event.belongsTo(models.category, {
      as : "CategoryId",
      foreignKey: 'category_id'
    })

    event.belongsTo(models.user, {
      as : "createdBy",
      foreignKey: 'user_id'
    })

    event.hasMany(models.payment, {
      as : "Payments",
      foreignKey: 'event_id'
    })

    // event.hasMany(models.o, { foreignKey: 'eventId' })
    event.hasMany(models.favorite, { foreignKey: "event_id" })
  };
  return event;
};