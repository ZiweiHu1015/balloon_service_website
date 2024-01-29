const router = require('express').Router();
let Event = require('../models/event.model');

router.route('/').get((req,res)=> {
    Event.find({category:"grabAndGo"}) 
        .then(GrabAndGoes => res.json(GrabAndGoes))
        .catch(err => res.status(400).json('Error: ' + err ));
});

router.route('/add').post((req, res) =>{
    const name = req.body.name;
    const description = req.body.description;
    const price = Number(req.body.price);
    const image = req.body.image;

    const newGrabAndGo = new Event({
        name, 
        description,
        price,
        image
    });
    
    newGrabAndGo.save()//saved to database
        .then(() => res.json('GrabAndGo added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Event.findById(req.params.id)
      .then(GrabAndGoes => res.json(GrabAndGoes))
      .catch(err => res.status(400).json('Error: ' + err));
  });


module.exports = router;