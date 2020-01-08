'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
    title: DataTypes.TEXT,
    category_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    address: DataTypes.TEXT,
    urlMaps: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {});
  event.associate = function(models) {
    // associations can be defined here
    event.belongsTo(models.user, {
      foreignKey: "user_id",
      as: "createdBy"
    }),
    event.belongsTo(models.category, {
      foreignKey: "category_id",
      as: "CategoryId"
    }),
    event.hasMany(models.payment, {
      foreignKey: "event_id",
      as: "Payments"
    }),
    event.hasMany(models.favorite, {
      foreignKey: "event_id",
      as: "Favorites"
    })
  };
  return event;
};