'use strict';
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define('payment', {
    event_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    status: DataTypes.STRING,
    attachment: DataTypes.STRING
  }, {});
  payment.associate = function(models) {
    // associations can be defined here
    payment.belongsTo(models.user, {
      as : "createdBy",
      foreignKey: 'user_id'
    })

    payment.belongsTo(models.event, {
      as : "eventId",
      foreignKey: 'event_id'
    })
  };
  return payment;
};