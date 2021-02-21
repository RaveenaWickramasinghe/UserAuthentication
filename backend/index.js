const express = require("express");
const  mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const passport = require("passport");


app.use("/api/users", require("./routes/user"));
//app constants
const{DB, PORT} = require("./config");

//initializing application
const app=express();
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

require('./middleware/passport')(passport);

const PORT = process.env.PORT || 5000;


//setup mongoose
//FH08xUF3JMuGldBX password
//
const startApplication = ()=>{
    mongoose.connect(DB,{
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        useCreateIndex:true,
    }).then(()=>
    success({
        message:"Connection Established \n ${DB}"
    })
    ).catch((err)=> success({
        message:"Unable to establish connection \n ${err}"
    }));

    app.listen(PORT , () => console.log({message: "The server has started on port: ${PORT}"}));


};
startApplication();


 //setup routes as middleware
 app.use("/users" , require("./routes/user"));
