var User = require('../models/users');
var bcrypt = require('bcrypt');

exports.register = async function (req, res) {
    // Get user input
    var user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };

    //Validate User Input
    if (!(user.email && user.password && user.name)) {
        res.status(400).send("All input is required");
        return;
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email: user.email });
    if(oldUser) {
        res.status(409).send("User already exist. Please login!");
        return;
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(user.password, 10);
    user.password = encryptedPassword;

    User.create(user, function (err, registeredUser) {
        if (err) {
            res.json({
                error: err
            })
            return;
        } else {
            registeredUser.generateJwt();
            res.status(200).json(registeredUser);
        }
    })
}

exports.login = async function (req, res) {
    // Get user input
    var user = {
        email: req.body.email,
        password: req.body.password
    };

    //Validate User Input
    if (!(user.email && user.password)) {
        res.status(400).send("All input is required");
        return;
    }

    // check if user already exist
    // Validate if user exist in our database
    const existinguser = await User.findOne({ email: user.email });
    if(existinguser && (await bcrypt.compare(user.password, existinguser.password))) {
        existinguser.generateJwt();
        res.status(200).json(existinguser);
    } else {
        res.status(409).send("Invalid Credentials!");
        return;
    }
}