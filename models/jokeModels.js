const mongoose = require('mongoose')

const jokeSchema = mongoose.Schema({
    joke:{
        type:String,
        required:true
    },
    jokeType:{
        type:String,
        enum:['Dark','DadJoke','Yomama','Programming'],
        required:true
    }

})

module.exports = mongoose.model('JokeModel',jokeSchema)