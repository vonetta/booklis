"use strict"

const mongodb = require("../mongodb")
const conn = mongodb.connection;
const ObjectId = mongodb.ObjectId;

function create(model) {
    const doc = {
        firstName: model.firstName,
        lastName: model.lastName,
        email: model.email,
        password: model.password,
        verified: model.verified
    }

    return conn
        .db().collection("users")
        .insertOne(doc)
        .then(result => {
            result.insertedId.toString()
        })
        .catch(err => {
            return Promise.reject(err)
        })
}

module.exports = {
    create: create
}