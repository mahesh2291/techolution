const express=require('express')
const router=express.Router();
const mongoose=require('mongoose')


const Results=require('../Schema/results')


router.get('/',(req,res,next)=>{
    Results.find((err,data)=>{
        if(err) {
            res.send(err)
        }
        else{
            res.send(data)
        }
    })
})

router.post('/',(req,res,next)=>{
    const results=new Results({
        name:req.body.name,
        rollNumber:req.body.rollNumber,
        marks :[{
            
            Maths:req.body.Maths,
            English:req.body.English,
            Science:req.body.Science
    
        }],
        

    })
   
    results.save().then(console.log(results));
      
})

    




module.exports=router;