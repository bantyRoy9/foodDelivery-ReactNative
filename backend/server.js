const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = require('./app.js');

dotenv.config({path:'./config.env'});

const PORT = process.env.PORT || 8000;
const MOGOURL = process.env.MOGOURL;

mongoose.connect(MOGOURL).then(conn=>{
    console.log('DB Connected');
}).catch(err=>console.log(err));

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})