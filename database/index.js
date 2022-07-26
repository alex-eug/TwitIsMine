require('dotenv').config();
const mongoose = require('mongoose')

exports.clientPromise = mongoose.connect(process.env.BDD)
.then(()=>{console.log('connexion BDD réussi');})
.catch(err=> console.log(err))

