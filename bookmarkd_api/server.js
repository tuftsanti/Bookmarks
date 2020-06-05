// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//GLOBALS
const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGODB_URL || 'mongodb://localhost:27017/bookmarks';

//DB CONNECTION
mongoose.connection.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));
mongoose.connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => console.log('connected to mongoose...'));

// MIDDLEWARE
app.use(express.json());
app.use('/bookmarks', bookmarksController);

// CONTROLLERS/ROUTES
const bookmarksController = require('./controllers/bookmarks.js');
app.use('/bookmarks', bookmarksController);


app.listen(PORT, ()=>{
    console.log(`Shhhhh, trying to read on port: ${PORT}`)
})