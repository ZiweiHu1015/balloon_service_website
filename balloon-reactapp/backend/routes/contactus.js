const router = require('express').Router();
let ContactUs = require('../models/contactus.model');

router.route('/').get((req,res)=> {
    ContactUs.find() 
        .then(contacts => res.json(contacts))
        .catch(err => res.status(400).json('Error: ' + err ));
});

router.route('/').post((req, res) => {
    const fullname = req.body.fullname;
    const email = req.body.email;
    const phone = Number(req.body.phone);
    const eventDate = Date.parse(req.body.eventDate);
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    const eventLocation = req.body.eventLocation;
    const locationType = req.body.locationType;
    const budget = req.body.budget;

  
    const newContact = new ContactUs({
        fullname, 
        email ,
        phone ,
        eventDate, 
        startTime ,
        endTime ,
        eventLocation, 
        locationType ,
        budget
    });
    
    newContact.save()//saved to database
        .then(() => res.json('Contacts added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;