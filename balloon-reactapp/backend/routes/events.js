
const router = require('express').Router();
let Events = require('../models/events.model');//need to require the model

router.route('/').get((req,res) =>{
    Events.find() //find all events in database
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: '+err));
});//first route handles http get request

router.route('/add').post((req,res) =>{
    const eventname = req.body.eventname;
    const description = req.body.description;
    const price = Number(req.body.price);

    const newEvents = new Events({
        eventname,  
        description,
        price,
    });

    newEvents.save()
        .then(()=> res.json('Events added!'))
        .catch(err => res.status(400).json('Error: '+ err));
    });//second route handles http post request

    router.route('/:id').get((req, res) => {
        Events.findById(req.params.id)
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err));
    });

    router.route('/:id').delete((req, res) => {
        Events.findByIdAndDelete(req.params.id)
        .then(events => res.json("Event deleted"))
        .catch(err => res.status(400).json('Error: ' + err));
    });

    router.route('/update/:id').post((req, res) => {
        Events.findById(req.params.id)
            .then(events => {
            events.eventsname = req.body.eventsname;
            events.description = req.body.description;
            events.price = Number(req.body.price);
        
            events.save()
                .then(() => res.json('Events updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
            })
            .catch(err => res.status(400).json('Error: ' + err));
    });


module.exports = router;