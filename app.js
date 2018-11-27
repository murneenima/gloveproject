const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const hbs = require('hbs')

var Staff = require('./Schema');
var Admin = require('./Schema');
var StaffSchedule = require('./Schema');

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

app.set('view engine', 'hbs');
app.use(express.static('public'))

//---------------------------------- API test------------------------------------------------//
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


//-------------------------------------- Add Staff -----------------------------------------//
app.post('/addstaff',(req,res)=>{

    // ------ Position --------
    if(req.body.emp_position == 'Choose'){
        res.status(400).send('Position doesnot choose');
           return
    }

    if(req.body.emp_dept == 'Choose'){
        res.status(400).send('Department doesnot choose');
           return
    }

    if(req.body.emp_status == 'Choose'){
        res.status(400).send('Status doesnot choose');
           return
    }

    let emp_position  = ' '
    if(req.body.emp_position == 'Excutive'){
        emp_position= 'Excutive';
    }else if(req.body.emp_position == 'Excutive II'){
        emp_position= 'Excutive II';
    }else if(req.body.emp_position == 'Officer'){
        emp_position= 'Officer';
    }else if(req.body.emp_position == 'Supervisor'){
        emp_position = 'Supervisor';
    }else if(req.body.emp_position == 'Admin/Secretary'){
        emp_position = 'Admin/Secretary'
    }
    //console.log('Position == ',req.body.emp_position)


    //-------- Department -------------
    
    let emp_dept = ' '
    if(req.body.emp_dept == 'Admin'){
        emp_dept = 'Admin';
    }else if(req.body.emp_dept == 'HR'){
        emp_dept = 'HR';
    }else if(req.body.emp_dept == 'Finance'){
        emp_dept = 'Finance';
    }else if(req.body.emp_dept == 'IT'){
        emp_dept = 'IT';
    }
    //console.log('Dept == ',req.body.emp_dept)

    //------------------ Status ---------
   
    let emp_status =' '
    if(req.body.emp_status){
        emp_status = 'Online';
    }else if(req.body.emp_status){
        emp_status = 'AL';
    }
    //console.log('Status == ',req.body.emp_status)

    //---------------------------------
    let newStaff = Staff({
        badgeNo :req.body.badgeNo,
        emp_name : req.body.emp_name,
        emp_surname : req.body.emp_surname,
        emp_position:emp_position,
        emp_dept:emp_dept,
        emp_status:emp_status
    })

    newStaff.save().then((doc)=>{
        res.render('admin_staff.hbs')
    },(err)=>{
        res.status(400).send(err)
    })  
})


//------------------------------------- encode staff data ----------------------------------//
app.get('/send_staffdata',(req,res)=>{
    Staff.find({},(err,dataType)=>{
        if(err) console.log(err);
    }).then((dataType)=>{
        //res.send(dataType)
        res.render('admin_staff.hbs',{
        dataType: encodeURI(JSON.stringify(dataType))
        })
    },(err)=>{
        res.status(400).send('error');
    })
}) 


//------------------------------------ Edit staff schedule ------------------------------------------//


//------------------------------- Port -----------------------------------------------------//
app.listen(3000,()=>{
    console.log(' ##### listening on port 3000 #####')
})
