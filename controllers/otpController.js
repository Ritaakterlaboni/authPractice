const userSchema = require("../model/userSchema")
const crypto = require('crypto')

async function otpController(req, res){
// console.log("otp paisi")
const {email, otp} = req.body
const user =await userSchema.findOne({email})

if(!user){
    return res.send("not match email")
}
if(user.isVerfied){
    return res.send("this mail is verified")
}

if(user.otp !== otp || user.expireOtp < Date.now()){
    return res.send("otp invalid")
}
user.isVerfied = true
user.otp = undefined
user.expireOtp = undefined
await user.save()
return res.send("verify done!")

}
module.exports = otpController