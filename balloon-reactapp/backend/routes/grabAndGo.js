const router = require('express').Router();
let GrabAndGo = require('../models/grabandgo.model');

router.route('/').get((req,res)=> {
    GrabAndGo.find() //get a list of all flowers
        .then(GrabAndGoes => res.json(GrabAndGoes))
        .catch(err => res.status(400).json('Error: ' + err ));
});

router.route('/add').post((req, res) =>{
    const grabandgoname = req.body.grabandgoname;
    const description = req.body.description;
    const price = Number(req.body.price);
    const image = req.body.image;

    const newGrabAndGo = new GrabAndGo({
        grabandgoname, 
        description,
        price,
        image
    });
    
    newGrabAndGo.save()//saved to database
        .then(() => res.json('GrabAndGo added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;