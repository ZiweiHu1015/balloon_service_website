const router = require('express').Router();
let Event = require('../models/event.model');

router.route('/').get((req,res)=> {
    Event.find({category:"flower"}) //get a list of all flowers
        .then(Flowers => res.json(Flowers))
        .catch(err => res.status(400).json('Error: ' + err ));
});

router.route('/add').post((req, res) =>{
    const name = req.body.name;
    const description = req.body.description;
    const price = Number(req.body.price);
    const image = req.body.image;

    
    const newFlower = new Flower({
        name, 
        description,
        price,
        image
    });
    
    newFlower.save()//saved to database
        .then(() => res.json('Flower added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Flower.findById(req.params.id)
      .then(Flowers => res.json(Flowers))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;