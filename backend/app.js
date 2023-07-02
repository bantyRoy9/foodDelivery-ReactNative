const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./Routes/auth.route');
const { API_ENDPOINT_NOT_FOUND_ERR, SERVER_ERR } = require('./error');
const AppError = require('./Utils/AppError');
const authRouter = require('./Routes/auth.route');
const restaurentRouter = require('./Routes/restaurent.route');

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.get("/", (req, res) => {
    res.status(200).json({
      type: "success",
      message: "server is up and running",
      data: null,
    });
  });

  
app.use('/api/auth', authRouter);
app.use('/api/v1/restaurent', restaurentRouter);

app.all('*',(req,res,next)=>{
    next(new AppError(`Cant found ${req.originalUrl} on this server`, '404'));
})

app.use((err,req,res,next)=>{
    console.log(err,'global');

    const status = err.statusCode || 500;
    const msg = err.message || SERVER_ERR;
    const data = err.data || null;

    res.status(status).json({
        type:'error',status,msg,data
    })
})


module.exports = app