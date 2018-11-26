const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const hbs = require('hbs')


var Schema = mongoose.Schema

//-------------------------------Staff Schema --------------------------------------------//
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

//------------------------------- Admin Schema -------------------------------------------//
var AdminSchema = new Schema({
    username:{
      type:String,
      required:true,
      unique:true 
    },
    password:{
        type:String,
        required:true,
        minlength:8
    }
})


var Staff = mongoose.model('Staff', StaffSchema)
var Admin = mongoose.model('Admin', AdminSchema)

//----------------------------------- Connect ---------------------------------
mongoose.connect('mongodb://localhost:27017/dbase').then((doc) => {
    console.log('@@@@ Success to connect with Database @@@')
}, (err) => {
    console.log('!!!!!!!!!! error to connect with database !!!!!!!!!')
})





//-------------------------------------------------------------------------------------------//
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}));


//-------------------------------------------------------------------------------------------//
app.get('/',(req,res)=>{
    res.send('hello')
})


//----------------------------------- Sign Up-----------------------------------------------//
app.post('/signup',(req,res)=>{
    let newAdmin = Admin({
        username : req.body.username,
        password : req.body.password
    })

    newAdmin.save().then((doc)=>{
        res.send(doc)
    },(err) => {
        res.status(400).send(err)
    })
})


//------------------------------------- Sign in --------------------------------------------//
app.post('/signin',(req,res)=>{
    let usernameInput=req.body.username1
    let passwordInput=req.body.password1

    // console.log(usernameInput);
    //  console.log(passwordInput);

    Admin.find({
        username:usernameInput,
        password:passwordInput 
    }).then((admin)=>{
        if(admin.length == 1){
            //;res.send(admin[0]);
            res.render('admin_schedule.hbs');
        }else if(admin.length == 0){
            res.status(400).send('cannot login')
        }
    },(err)=>{
        res.status(400).send(err)
    })

})

// ------------------------------ Port -------------------------------------------------------
app.listen(3000,()=>{
    console.log(' ##### listening on port 3000 ####')
})
