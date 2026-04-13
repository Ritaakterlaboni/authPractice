const express= require('express');
const userSchema = require('../model/userSchema');
const crypto = require('crypto');


async function signupController(req, res){

    console.log("authpractice paisi !")
const { firstname, lastname, email, password } = req.body

// age check korbo info sob dawya ase naki na pore otp generate korbe
if(!firstname || !lastname){
    return res.send("name requierd")
}
if(!email){
    return res.send("email requierd")
}
if(!password){
    return res.send("password requierd")
}
// email duplicate kina check korbo
const duplicateEmail = await userSchema.findOne({email})
if(duplicateEmail){
    return res.send("this email has been duplicate")
}
// otp generate korbo
    const otp = crypto.randomInt(100000, 999999).toString()

// otp expire korbo
    const expireOtp = new Date(Date.now() +(10 * 60 * 1000))


const authpractice = userSchema({
  firstname,
  lastname,
  email,
  password,
  otp,
  expireOtp
});

await authpractice.save();

    
    
}

module.exports= signupController