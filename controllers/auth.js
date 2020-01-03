const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.user

//register
exports.register = (req, res) => {
    User.create(req.body).then(dataUser => {
        const token = jwt.sign({
            userId: dataUser.id
        }, "my-secret-key")
        res.send({
            message: "Berhasil Daftar",
            dataUser,
            token
        })
    }) 
}

//login
exports.login = (req, res) => {
    const username = req.body.username
    const password = req.body.password

    User.findOne( {where: {username, password}}).then(user => {
        if(user) {
            const token = jwt.sign({
                userId: user.id
            }, "my-secret-key")
            res.send({
                user,
                token
            })
        }else{
            res.send({
                    error: true,
                    message: "Wrong Username or Password"
            })
        }
    })
}

