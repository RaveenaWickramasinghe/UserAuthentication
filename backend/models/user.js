const mongoose = require("mongoose");
const{Schema, model} =  require("mongoose")

const UserSchema = new Schema({
    email: {
        type: String
    },

    username: {
        type: String
    },
    password: {
        type: String
    },

    passwordCheck: {
        type: String
    },

    role:{
        type: String, default: "user" ,
        enum:["user","admin","employee"]
    }
},{ timesamps: true})


module.exports = model("users" , UserSchema);

