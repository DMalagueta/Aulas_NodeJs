const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String
});

module.exports = model('User', UserSchema);