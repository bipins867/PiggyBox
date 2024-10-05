require('dotenv').config()

const express=require('express')
const cors=require('cors')
const path=require('path')
const bodyParser=require('body-parser')



const db = require("./database");



// Just check
app=express()



app.use(cors({
    origin:'*',
    methods:['GET','POST']
}))

app.use(bodyParser.json({extends:false}))





db.sync()
  .then(() => {

    app.listen(process.env.APP_PORT);
    console.log(`Lisining to the port : ${process.env.APP_PORT}`)
  })
  .catch((err) => console.log(err));
