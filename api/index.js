
var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app = Express();
app.use(cors());  

var CONNECTION_STRING ="mongodb+srv://ziweihu98:6991591@bostonggevents.u1njw0p.mongodb.net/?retryWrites=true&w=majority";

var DATABASENAME = "Product";
var database;

app.listen(3000,()=>{
    Mongoclient.connect(CONNECTION_STRING);
    console.log("hi there");
})



