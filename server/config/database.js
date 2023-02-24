//require mongoose module
var mongoose = require('mongoose');

//require database URL from properties file
var dbURL = require('./properties').DB;

//export this function and imported by server.js
module.exports = function(){

    mongoose.connect(dbURL).then(() => {
        console.log("Successfully connected to database");
    })
        .catch((error) => {
            console.log("database connection failed. exiting now...");
            console.error(error);
            process.exit(1);
        });
}