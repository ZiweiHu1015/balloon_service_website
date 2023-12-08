
const express = require("express");
const Mongoclient = require("mongodb").MongoClient;
const cors = require("cors");
const mongoose = require('mongoose');


require('dotenv').config();
var app = express();
app.use(cors()); 
app.use(express.json()); 

var CONNECTION_STRING ="mongodb+srv://ziweihu98:6991591@bostonggevents.u1njw0p.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_STRING);

const eventsRouter = require('./routes/events');
const usersRouter = require('./routes/users');

app.use('/events', eventsRouter);
app.use('/users', usersRouter);

app.listen(3000,()=>{
    console.log('server is running');
})



