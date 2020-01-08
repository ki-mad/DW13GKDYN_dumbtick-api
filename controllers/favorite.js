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
    include: [
      {
        model: User,
        as: "favoritedBy",
      },
      {
        model: Event,
        as: "EventId",
      }
    ]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => res.send(err));
};
