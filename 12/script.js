const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose')
const test = require('./reviewUserModel.js');
const url = "mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.7mamtlu.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0"
const databaseUser = 'AbhyaAhuja';
const databasePassword = 'abhya123';
const databaseName= 'Test';

let link = url.replace("$_USERNAME_$", databaseUser);
link = link.replace("$_PASSWORD_$" , databasePassword);
link = link.replace("$_DB_NAME_$", databaseName);

mongoose.connect(link)
.then(
    ()=>console.log('--Database Connected--')
);

app.listen(1000, ()=>console.log('___App Started___'));