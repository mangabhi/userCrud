const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            min:18,
            max:65,
            required:true
        },
        profession:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        }
})
module.exports=mongoose.model('userCheck',userSchema)