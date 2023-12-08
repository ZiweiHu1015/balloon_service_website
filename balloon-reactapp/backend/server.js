
const express = require("express");
const Mongoclient = require("mongodb").MongoClient;
const cors = require("cors");
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json()); 

const uri = process.env.ATLAS_URI;
mongoose.connect(uri
);

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully");
})

//var CONNECTION_STRING ="mongodb+srv://ziweihu98:6991591@bostonggevents.u1njw0p.mongodb.net/?retryWrites=true&w=majority";

const eventsRouter = require('./routes/events');
const usersRouter = require('./routes/users');

app.use('/events', eventsRouter);
app.use('/users', usersRouter);

app.listen(3000,()=>{
    console.log('server is running');
})



