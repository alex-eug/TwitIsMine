const express = require('express');
require('dotenv').config();
require('./database')
const path = require('path');
const morgan = require('morgan');
const index = require('./routes')
const app = express();
const PORT = process.env.PORT || 3000;

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');

app.use(morgan('short'))
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(index)



app.listen(PORT,()=>{
    console.log( `App listening on http://localhost:${PORT}`);
})