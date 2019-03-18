"use strict"

const usersService = require("../services/users.service")
const nodemailer = require('nodemailer')
const xoauth2 = require('xoauth2')

let _apiPrefix;


let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: 'true',
    port: '465',
    auth: {
        type: 'OAuth2',
        user: 'vonettastevenson@gmail.com',
        clientId: '107868534070-rieivaahceq63phrk7895g42e8hbhfd5.apps.googleusercontent.com',
        clientSecret: 'z3CeTunPured-2Zt41WdgczC',
        refreshToken: ''


    }
});

module.exports = apiPrefix => {
    _apiPrefix = apiPrefix;
    return {
        create: create
    }
}

function create(req, res) {
    // const mailOptions = {
    //     from: 'vonettastevenson@gmail.com',
    //     to: req.body.email,
    //     subject: 'Sending Email using Node.js',
    //     text: 'That was easy'
    // }


    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         console.log(error)
    //     }
    //     else {
    //         console.log('Email sent ' + info.response)
    //     }
    // })
    console.log(req.body)
    usersService.create(req.body)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(500).send(err))
}