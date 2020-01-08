// const jwt = require('jsonwebtoken')
const models = require("../models");
const User = models.user;
const Event = models.event;
const Favorite = models.favorite;

//get all data
exports.listUser = (req, res) => {
  User.findAll()
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

exports.UserById = (req, res) => {
  User.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Event,
        as: "Events",
      },
      {
        model: Favorite,
        as: "Favorites",
      }
    ]
  })
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

exports.update = (req, res) => {
  User.update(req.body, { where: { id: req.params.id } })
    .then(data => res.send(data))
    .catch(err => {
      res.send(err);
    });
};
