const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

var Schema = mongoose.Schema

var StaffSchema = new Schema({
    badgeNo: {
        type: String,
        unique: true,
        required: true,
        minlength: 7
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})
var Staff = mongoose.model('Staff', StaffSchema)

mongoose.connect('mongodb://localhost:27017/dbase').then((doc) => {
    console.log('@@@@ Success to connect with Database @@@')
}, (err) => {
    console.log('!!!!!!!!!! error to connect with database !!!!!!!!!')
})


var app = express()
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('hello')
})







// ------------------------------ Port -------------------------------------------------------
app.listen(3000,()=>{
    console.log(' ##### listening on port 3000 ####')
})
