const models = require('../models')
const User = models.user
const Event = models.event
const Favorite = models.favorite

exports.favorite = (req, res) => {
    Favorite.findOne(
        {
            where:
            {
                user_id: req.params.user_id,
                event_id: req.params.event_id
            }
        }
    ).then(data => {
        if(data) {
            res.send({status: true, data})
        } else {
            res.send({ status: false, data})
        }
    }).catch(err => res.send(err))
}

exports.create = (req, res) => {
    Favorite.create(req.body)
        .then(data => {
            res.send(data)
        }).catch(err => res.send(err))
}

exports.destroy = (req, res) => {
    Favorite.destroy({
        where: { id: req.params.id }
    })
        .then(data => {
            res.send({message: "success delete data"})
        }).catch(err => res.send(err))
}

exports.show = (req, res) => {
    Favorite.findAll(
        {
            where: { user_id: req.params.id },
            attributes: ['user_id', 'event_id'],
            include: [
                {
                    model: User,
                    as: 'Favorites',
                    attributes: { exclude: ['password', 'createdAt', 'updaatedAt'] }
                },
                {
                    model: Event,
                    as: 'Events',
                    attributes: { exclude: ['createdAt', 'updatedAt'] }
                }
            ]
        })
        .then(data => {
            res.send(data)
        }).catch(err => res.send(err))
}
