// const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.user

//get all data
exports.listUser = (req, res) => {
    User.findAll().then(data => res.send(data))
    .catch(err => res.send(err))
}

exports.UserById = (req, res) => {
    User.findOne({
        where: {id: req.params.id}
    }).then(data => res.send(data))
    .catch(err => res.send(err))
}
