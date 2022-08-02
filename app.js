const express = require('express');

const app = express();
const mongoose = require('mongoose');
require('dotenv');

//Middleware
// app.use(auth)

//Routes 

app.get('/', (req, res) => {
    res.send('we are on home')
})

app.get('/posts', (req, res) => {
    res.send('we are on post')
})


// connect to DB
mongoose.connect(process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  },()=>{
    console.log('connect to server');
  }
);

app.listen(3000)