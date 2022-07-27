const mongoose = require('mongoose')
const schema = mongoose.Schema

const tweetSchema = schema({
    content: { type: String, maxLength: [140, 'Tweet trop long'], minLength: [2, 'Tweet trop court'], required: [true, 'champs requis'] }
})

const Tweet = mongoose.model('tweet', tweetSchema)

module.exports = Tweet