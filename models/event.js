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
  };
  return event;
};