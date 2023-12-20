const router = require('express').Router();
let Flower = require('../models/flower.model');

router.route('/').get((req,res)=> {
    Flower.find() //get a list of all flowers
        .then(Flowers => res.json(Flowers))
        .catch(err => res.status(400).json('Error: ' + err ));
});

router.route('/add').post((req, res) =>{
    const flowername = req.body.flowername;
    const description = req.body.description;
    const price = Number(req.body.price);
    const image = req.body.image;

    
    const newFlower = new Flower({
        flowername, 
        description,
        price,
        image
    });
    
    newFlower.save()//saved to database
        .then(() => res.json('Flower added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;