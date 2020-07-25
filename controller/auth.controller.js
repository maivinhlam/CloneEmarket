var db = require("../db");

module.exports.login = (req, res) => {
    res.render('auth/login');
};

module.exports.postLogin = (req, res) => {
    var email = req.body.email;
    var password = req.body.password;    
    console.log(email);
    var user = db.get('users').find({email: email}).value();
    if(!user) {
        res.render('auth/login', {
            errors : [
                "User dose not exits."
            ],
            values: req.body
        });
        return;
    }
    if(user.password !== password) {
        res.render('auth/login', {
            errors : [
                "Wrong password."
            ],
            values: req.body
        });
        return;
    }
    
    res.cookie('userId', user.id);
    res.redirect('/users');

};