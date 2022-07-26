const mongoose = require('mongoose')

exports.clientPromise = mongoose.connect('mongodb+srv://alex:GabLou3145031820@cluster0.x11uct0.mongodb.net/twitIsMine?retryWrites=true&w=majority')
.then(()=>{console.log('connexion BDD réussi');})
.catch(err=> console.log(err))

