
const router = require('express').Router();
let Events = require('../models/events.model');//need to require the model

router.route('/').get((req,res) =>{
    Events.find() //find all events in database
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: '+err));
});//first route handles http get request

router.route('/add').post((req,res) =>{
    const username = req.body.username;
    const description = req.body.description;
    const price = req.body.price;

    const newEvents = new Events({
        username,
        description,
        price,
    });

    newEvents.save()
    .then(()=> res.json('Events added!'))
    .catch(err => res.status(400).json('Error: '+ err));
});//second route handles http post request

module.exports = router;