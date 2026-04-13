const mongoose = require('mongoose')
const {Schema} = mongoose
const authPractice = new Schema({
firstname:{
    type:String
},
lastname:{
    type:String
},
email:{
    type:String
},
password:{
    type:String
},
otp:{
    type:String
},
expireOtp:{
    type:Date
},
isVerfied:{
    type:Boolean,
    default:false
}
})
module.exports= mongoose.model('authPractice', authPractice)