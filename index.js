const express = require('express')
const app = express();

const jokeRouters = require('./JokeRoutes');

const PORT = process.env.PORT || 5000

app.use('/joke',jokeRouters)

app.get('/',(req,res)=>{
    res.status(200).send("Lol")
})

app.listen(PORT)