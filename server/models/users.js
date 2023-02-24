var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jwt = require('jsonwebtoken');
var env = require('../config/env');

var userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: { type: String },
    token: { type: String },
});

userSchema.methods.generateJwt = function () {
    this.token = jwt.sign({
        _id: this._id,
        email: this.email
    }, env.TOKEN_KEY, {
        expiresIn: "2h",
    });
};

var userModel = mongoose.model('Users', userSchema);
module.exports = userModel;