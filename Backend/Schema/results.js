const mongoose=require('mongoose');

const marksSchema=mongoose.Schema ({
    Maths:Number,
    English:Number,
    Science:Number
})

const resultSchema =mongoose.Schema ({
    name:String,
    rollNumber:String,
    marks:[marksSchema]
})

module.exports=mongoose.model('results',resultSchema)
