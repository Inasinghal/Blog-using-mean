const db = require('../config/database');
const env = require('../config/env');
var bcrypt = require('bcrypt');
var User = require('../models/users');
const mongoose = require('mongoose');

db();

const seedUsers = [
    {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: env.USER_PASSWORD
    }
];

const seedDB = async () => {
   await User.deleteMany({});
   seedUsers[0].password = await bcrypt.hash(seedUsers[0].password, 10)
   await User.insertMany(seedUsers);
}

seedDB().then(() => {
    mongoose.connection.close();
});

