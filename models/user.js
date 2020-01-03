'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    phonenumber: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.event, {
      as : "Events",
      foreignKey: 'user_id'
    })

    user.hasMany(models.payment, {
      as : "Payments",
      foreignKey: 'user_id'
    })

    user.hasMany(models.favorite, { foreignKey: "user_id" })
  };
  return user;
};