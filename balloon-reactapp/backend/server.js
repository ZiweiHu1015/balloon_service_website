const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const allowedOrigins = ['http://localhost:3000', 'https://ziwei.d2f859lvvrqkqv.amplifyapp.com'];


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
 
//middlewear
//app.use(cors({origin: 'http://localhost:3000', credentials: true, optionSuccessStatus:200}));
app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true
  }));
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


const eventsRouter = require('./routes/events');
const flowersRouter = require('./routes/flowers');
const grabAndGoRouter = require('./routes/grabAndGo');
const contactusRouter = require('./routes/contactus');

app.use("/event", eventsRouter);
app.use("/flower", flowersRouter);
app.use("/grabAndGo", grabAndGoRouter);
app.use("/contactus", contactusRouter);

app.get("/", (req, res) => {
    res.send("Main page");

}); 

app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`); 
    
});