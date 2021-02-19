const express=require('express')

const router=express.Router();
const User=require('../Model/userModel')

//Routes
router.get('/',async(req,res)=>{
    try{
    const checkUser= await User.find()
    res.json(checkUser)
    }
    catch(err){
        res.json({message:err})
    }
})

//Specific User ID
router.get('/:userId',async(req,res)=>{
    try{
    const userI= await User.findById(req.params.userId)
    res.json(userI)
    }
    catch(err){
        res.json({message:err})
    }
})


//Create
router.post('/',async(req,res)=>{
    const userPost=new User({
        name:req.body.name,
        age:req.body.age,
        profession:req.body.profession,
        email:req.body.email

    })
    try{
    const saveUser=await userPost.save()
    res.json(saveUser)
    }
    catch(err){
        res.json({message:err})
    }
})


//delete
router.delete('/:userId',async(req,res)=>{
    try{
    const deleteUser= await User.remove({_id:req.params.userId})
    res.json(deleteUser)
    }
    catch(err){
        res.json({message:err})
    }
})


//update

router.put('/:userId',async(req,res)=>{
    try{
    const updateUser= await User.updateOne({_id:req.params.userId},{$set:{name:req.body.name}})
    res.json(updateUser)
    }
    catch(err){
        res.json({message:err})
    }
})








module.exports=router