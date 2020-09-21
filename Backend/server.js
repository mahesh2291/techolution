const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const mongoose=require('mongoose')
const resultRouter=require('./routes/results')


const app=express()

mongoose.connect('mongodb+srv://mahesh:Mahesh2291@results.v7ubn.mongodb.net/<dbname>?retryWrites=true&w=majority',
  {
      useNewUrlParser: true,
      useUnifiedTopology: true 
  },
  
  console.log("database connected")

)
    


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/results',resultRouter)

app.listen(process.env.PORT || 5000),()=> {
    console.log(`server started running on ${port}` )
}