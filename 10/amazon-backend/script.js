const express = require('express');
const productsRouter = require('./routes/productsRoutes.js');
// app.use - middleware
const app = express();
const test = require('./models/productsModel.js')
const mongoose = require('mongoose');

app.use('/api/products', productsRouter); //no dot here as it wasn't an obj

const url = "mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.7mamtlu.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0"
const databaseUser = 'AbhyaAhuja';
const databasePassword = 'abhya123';
const databaseName = 'Amazon-Backend';

let dbLink = url.replace("$_USERNAME_$", databaseUser);
dbLink = dbLink.replace("$_PASSWORD_$", databasePassword);
dbLink = dbLink.replace("$_DB_NAME_$", databaseName);

mongoose.connect(dbLink)
.then(
    ()=>console.log('----Database Connected---')
);

app.listen(1400,
    ()=>console.log('_____App Started_____')
);

// database connectivity
// database ..