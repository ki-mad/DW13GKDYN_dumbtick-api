const jwt = require('jsonwebtoken');
const models = require('../models');
const Payment = models.payment;
const User = models.user;
const Event = models.event
    
exports.payment = (req, res) => {
    Payment.create(req.body).then(payment => {
        res.send({
            message: "Berhasil Daftar",
            payment,
        })
    }) 
}

exports.paymentId = (req, res) => {
    Payment.findAll({
        where: {user_id: req.params.id},
        include: [
            {
                model: Event,
                as: "eventId",
                include: [
                    {
                        model: User,
                        as: "createdBy"
                    }
                ] 
            },
            {
                model: User,
                as: "createdBy"
            }
        ]
    }).then(data => res.send(data))
    .catch(err => res.send(err))
}

exports.updateStatusConfirm = (req, res) => {
    Payment.update( 
        {status: "confirmed"},
        {where: {id: req.params.id},
    }
    ).then(data => {
        res.send({
            message: "Update Success",
            data
        })
    })
}

exports.updateStatusApproved = (req, res) => {
    Payment.update(
        {status: "approved"},
        {where: {id: req.params.id}}
    ).then(data => {
        res.send({
            message: "Update Success",
            data
        })
    })
}

exports.getPaymentApproved = (req, res) => {
    Payment.findAll({
        where: {user_id: req.params.id},
        where: {status: "approved"},
        include: [
            {
                model: Event,
                as: "eventId",
                include: [
                    {
                        model: User,
                        as: "createdBy"
                    }
                ] 
            },
            {
                model: User,
                as: "createdBy"
            }
        ]
    }).then(data => res.send(data))
    .catch(err => res.send(err))
}