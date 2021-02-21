const bodyParser = require("body-parser");
const User = require("../models/user");
const router =  require("express").Router();
const { userAuthentication,checkRole} = require('../middleware/auth');
const {User} = require("../models/user");


//user registration route
router.post("/register-user", (req,res) =>{

    const user = new User(req.body)

    user.save((err) =>{
        if(err) return res.status(400).json({ success: false, err})
        return res.status(200).json({ success: true})
    })
});


//user login route
router.post("/login-user", (req,res) =>{

    const user = new User(req.body)

    card.save((err) =>{
        if(err) return res.status(400).json({ success: false, err})
        return res.status(200).json({ success: true})
    })
});

//profile route
router.get("profile",userAuthentication, async(req,res) =>{
    console.log(req.User);
    return res.json("Profile");
});
//users protected route
router.post('/user-protected',userAuthentication,checkRole(["user"]),async(req,res)=>{

});

//admin protected route
router.post('/admin-protected',userAuthentication,checkRole(["admin"]),async(req,res)=>{});

//employee protected route
router.post('/employee-protected',userAuthentication,checkRole(["employee"]),async(req,res)=>{});


module.exports = router;