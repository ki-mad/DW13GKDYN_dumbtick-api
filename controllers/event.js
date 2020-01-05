const models = require("../models");
const Event = models.event;
const Category = models.category;
const User = models.user;
const { Op } = require("sequelize");

exports.EventByCategory = (req, res) => {
  Event.findAll({
    where: { category_id: req.params.id },
    include: [
      {
        model: Category,
        as: "CategoryId"
      },
      {
        model: User,
        as: "createdBy"
      }
    ]
  })
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

exports.EventByTitle = (req, res) => {
  Event.findOne({
    where: { title: req.params.title },
    include: [
      {
        model: Category,
        as: "CategoryId"
      },
      {
        model: User,
        as: "createdBy"
      }
    ]
  })
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

exports.EventById = (req, res) => {
  Event.findOne({
    where: { id: req.params.id },
    // where: {status: "pending" || "confirmed"},
    include: [
      {
        model: Category,
        as: "CategoryId"
      },
      {
        model: User,
        as: "createdBy"
      }
    ]
  })
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

exports.listevent = (req, res) => {
  Event.findAll()
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

exports.addEvent = (req, res) => {
  Event.create(req.body).then(event => {
    res.send({
      message: "Berhasil Daftar",
      event
    });
  });
};

exports.deleteEvent = (req, res) => {
  Event.destroy({ where: { id: req.params.id } }).then(data => {
    res.send({
      message: "Event Deleted",
      data
    });
  });
};

exports.searchEvent = (req, res) => {
  Event.findAll({
    where: {
      title: { [Op.like]: `%${req.params.title}%` }
    },
    include: [
      {
        model: Category,
        as: "CategoryId",
        attributes: ["id", "name"]
      },
      {
        model: User,
        as: "createdBy",
        attributes: ["id", "username", "name", "phonenumber"]
      }
    ],
    limit: 5
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => res.send(err));
};
