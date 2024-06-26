const express=require('express');
const dbConnect=require('./config/database');
const app=express();
const router=require('./routes/router');
var cors = require("cors");

app.use(router);
app.use(express.json());

app.use(
    cors({
      origin: "*",
    })
  );


require('dotenv').config();
const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log("APP IS RUNNING")
})

dbConnect();


