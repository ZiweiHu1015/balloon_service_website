
const router = require('express').Router();
let User = require('../models/user.model');//need to require the model

router.route('/').get((req,res) =>{
    User.find() 
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: '+err));
});//first route handles http get request

router.route('/add').post((req,res) =>{
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()//save new user to database
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' +err));
});//second route handles http post request

module.exports = router;