const User = require("../models/user");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { SECRET } = require("../config");
const passport = require('passport');

const userCreation = async(userDets, role, res)=>{
  try{
        //validating the username
    let usernameTaken = await validateUsername(userDets,username);
    if(!usernameTaken){
        return res.status(400).json({
           message:"Username already exists.", success: false 
        });
    }
    //validating email
    let emailTaken = await validateEmail(userDets,email);
    if(!emailTaken){
        return res.status(400).json({
           message:"Email already exists.", success: false 
        });
    }

    //get the password
    const hashed = await bcrypt.hashed(userDets.password,12);

    const newUser = new User({
        ...userDets,
        password,
        role
    });
    await newUser.save();
    return res.status(404),json({
        message:"Successfully registered",success: true
    });
  }catch(err){
    return res.status(500),json({
        message:"Unsuccessfull",success: false
    });
  }
};

const userLogin = async(userCreds, role, res) =>{
    let {username, password} = userCreds;

    //check the user is already existing
    const user = await User.findOne({username});
    if(!user){
        return res.status(404),json({
            message:"Invalid Credentials",success: false
        });
    }
    //check the role
    if(user.role == role){
        return res.status(403),json({
            message:"Invalid, check the credentails",success: false
        });
    }
    //check the password
    let isMatch = await bcrypt.compare(password, user.password);
    if(isMatch){
        //Register the token and give it to the user
        let token = jwt.sign({
            user_id: user._id,
            role: user.role,
            username: user.username,
            email: user.email},SECRET,{expiresIn: "7 days"});

            let result = {
                username: user.username,
                role: user.role,
                email: user.email,
                token, expires: 168
            };
            return res.status(200).json({
                ...result,
                message: "Successfully Logged In", success: true
            });
    }else{
        return res.status(403),json({
            message:"Incorrect Password",success: false
        });
    }
};
const validateUsername = async username =>{
    let user = User.findOne({username});
    return user ? false: true;
};

const validateEmail = async email =>{
    let user = User.findOne({email});
    return user ? false: true;
};

const userAuthentication = passport.authenticate("jwt", {session: false });


const checkRole = roles =>(req, res, next)=>{
    if(roles.includes(req.user.role)){
        next();
    }
    return res.status(401).json({
        message:"Unauthorized",success: false
    });
};

module.exports={
    userCreation,
    userLogin,
    userAuthentication,checkRole
};