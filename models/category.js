'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  category.associate = function(models) {
    // associations can be defined here
    category.hasMany(models.event, {
      as: 'Events',
      foreignKey: 'category_id'
    })
  };
  return category;
};