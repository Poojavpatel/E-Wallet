const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

app.use(express.json());

// connecting to mongodb
const mongoURI = require('./config/config.js').mongoURI;
mongoose.connect(mongoURI)
    .then( () => console.log('Connected to MongoDB'))
    .catch( err => console.log('Error while connecting to MongoDB', err));

app.get('/' , (req , res) => {
    res.send("Welcome");
});

const port = process.env.PORT || 5000;
app.listen(port,() => console.log(`Server started at port ${port}`));