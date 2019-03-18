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
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
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
    console.log(process.env.CLIENT_ID)
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