const router = require('express').Router();
let Event = require('../models/event.model');

router.route('/').get((req, res) => {
    let categoryQuery = req.query.category || "event"; // Default category if not provided

    Event.find()
        .then(events => {
            // Filter events that include the specified category
            const filteredEvents = events.filter(event => 
                event.category && event.category.includes(categoryQuery)
            );
            res.json(filteredEvents);
        })
        .catch(err => res.status(400).json('Error: ' + err));
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