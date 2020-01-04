'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorite = sequelize.define('favorite', {
    event_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  favorite.associate = function(models) {
    // associations can be defined here
    favorite.belongsTo(models.user, {
      foreignKey: "user_id",
      as: "Users"
    }),
    favorite.belongsTo(models.event, {
      foreignKey: "event_id",
      as: "Events"
    })
  };
  return favorite;
};