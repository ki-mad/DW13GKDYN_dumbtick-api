const models = require("../models");
const User = models.user;
const Event = models.event;
const Favorite = models.favorite;

exports.favorite = (req, res) => {
  Favorite.findOne({
    where: {
      user_id: req.body.user_id,
      event_id: req.body.event_id
    }
  })
    .then(favorites => {
      if (favorites === null) {
        res.send({ isFav: false });
      } else {
        res.send({ favorites, isFav: true });
      }
    })
    .catch(err => res.send(err));
};

exports.create = (req, res) => {
  Favorite.create(req.body)
    .then(data => {
      res.send({ data, isFav: true });
    })
    .catch(err => res.send(err));
};

exports.destroy = (req, res) => {
  Favorite.destroy({
    where: {
      user_id: req.body.user_id,
      event_id: req.body.event_id
    }
  }).then(favorites => {
    res.send({
      isFav: false
    });
  });
};

exports.show = (req, res) => {
  Favorite.findAll({
    where: { user_id: req.params.id },
    attributes: ["user_id", "event_id"],
    include: [
      {
        model: User,
        as: "Favorites",
        attributes: { exclude: ["password", "createdAt", "updaatedAt"] }
      },
      {
        model: Event,
        as: "Events",
        attributes: { exclude: ["createdAt", "updatedAt"] }
      }
    ]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => res.send(err));
};
