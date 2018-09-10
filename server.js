const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const items = require('./routes/api/items');

app.use(bodyParser.json());
const db = require('./config/config').mongoURI;

mongoose
    .connect(db,{ useNewUrlParser: true })
    .then(()=>console.log('mongodb connected'))
    .catch(err => console.log(err));
    
app.use('/api/items',items);

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log('server at 5000'));