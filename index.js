const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const colors = require('colors');

const jokeRouters = require('./JokeRoutes');

const PORT = process.env.PORT || 5000

//mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true },()=>{
//    console.log("Database connected".rainbow)
//});

app.use(express.json())
app.use(cors())
app.use('/joke', jokeRouters)

app.get('/', (req, res) => {
    res.status(200).send("Lol")
})

app.listen(PORT)
