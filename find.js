const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('hbs')

var Staff =require('./Schema')
//----------------------------------- Connect ---------------------------------
mongoose.connect('mongodb://localhost:27017/dbase').then((doc) => {
    console.log('@@@@ Success to connect with Database @@@')
}, (err) => {
    console.log('!!!!!!!!!! error to connect with database !!!!!!!!!')
})
