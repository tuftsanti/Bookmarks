// DEPENDENCIES
const express = require('express');
const app = express();

const mongoose = require('mongoose');


//GLOBALS
const PORT = process.env.PORT || 3000;
const bookmarksController = require('./controllers/bookmarks.js');
const MONGOURL = process.env.MONGODB_URL || 'mongodb://localhost:27017/bookmarks';

//DB CONNECTION
mongoose.connection.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));
mongoose.connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => console.log('connected to mongoose...'));

// Middleware
app.use('/bookmarks', bookmarksController);


app.get('/', (req,res)=>{
    res.send('Hello World')
})




app.listen(PORT, ()=>{
    console.log(`Shhhhh, trying to read on port: ${PORT}`)
})