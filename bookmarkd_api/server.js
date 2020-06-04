const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000


// Middleware



app.get('/', (req,res)=>{
    res.send('Hello World')
})




app.listen(PORT, ()=>{
    console.log(`listening on port: ${PORT}`)
})