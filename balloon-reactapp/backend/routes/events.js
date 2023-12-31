const router = require('express').Router();
let Event = require('../models/event.model');

router.route('/').get((req,res)=> {
    Event.find({category:"event"}) //get a list of all events
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err ));
});

router.route('/add').post((req, res) =>{
    const name = req.body.name;
    const description = req.body.description;
    const price = Number(req.body.price);
    const image = req.body.image;
    const imageList = req.body.imageList;
   

    const newEvent = new Event({
        name, 
        description,
        price,
        image,
        imageList
  
    }); 
    newEvent.save()//saved to database
        .then(() => res.json('Event added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});  

router.route('/:id').get((req, res) => {
    Event.findById(req.params.id)
      .then(events => res.json(events))
      .catch(err => res.status(400).json('Error: ' + err));
  });


module.exports = router;