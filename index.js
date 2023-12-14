const express = require("express");
// const mongoose = require("mongoose")
require('./db/config')

// const costomers = require("./db/costomer")
const cors = require("cors")

const User = require('./db/User')
const app = express();
app.use(express.json())
app.use(cors())

app.post("/register",async (req,resp)=>{
    // resp.send("api in progress")
    // let  = new costomers(req.body)
   let kabeer = new User(req.body);
   let result = await kabeer.save();
    
    resp.send(result)
    

})


app.listen(5000);