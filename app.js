const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const mongoose=require('mongoose')


app.use(bodyParser.json())

//Importing routes 
const userRoute=require('./Route/user')
app.use('/user',userRoute)


mongoose.connect('mongodb://localhost:27017/userMan',{
        useNewUrlParser:true,useUnifiedTopology:true
        },()=>{
    console.log("DB Connection")
})


app.listen(8000,()=>{
    console.log("Server is connected")
})