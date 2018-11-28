const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const hbs = require('hbs')
//mongoose.Promise = global.Promise; 

// Syntax Error พอบันทึกแล้วซ้ำแล้วมันบันทึกไม่ได้ ต้องเปลี่ยน Database ใหม่ // API Staff schedule

var Staff = require('./StaffModel')
var StaffSchedule = require('./StaffScheduleModel')
//----------------------------------- Connect ---------------------------------
mongoose.connect('mongodb://localhost:27017/dbase').then((doc) => {
    console.log('@@@@ Success to connect with Database @@@')
}, (err) => {
    console.log('!!!!!!!!!! error to connect with database !!!!!!!!!')
})
mongoose.Promise = global.Promise; 

//-------------------------------------------------------------------------------------------//
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}));

app.set('view engine', 'hbs');
app.use(express.static('public'))

//-------------------------------------------------------------------------------------------//
app.get('/',(req,res)=>{
    res.send('hello')
})

//------------------------------------- encode staff data ----------------------------------//
app.get('/send_staffdata',(req,res)=>{
    Staff.find({},(err,dataType)=>{
        if(err) console.log(err);
    }).then((dataType)=>{
        //res.send(dataType)
        //console.log(dataType)
        res.render('admin_staff.hbs',{        
        dataType: encodeURI(JSON.stringify(dataType))
        })
    },(err)=>{
        res.status(400).send('error');
    })
}) 

//------------------------------------- staff schedule -------------------------------------//
app.post('/staffschedule',(req,res)=>{
    
    let edit_day = '';
    let edit_startmonth = '';
    let edit_lastmonth = '';
    let edit_line = ''; 

    //------------ Day ----------
    if(req.body.edit_day == 'Choose'){
        res.status(400).send('Line Amount doesnot choose');
           return
    }
    //----- start Month ---------
    if(req.body.edit_startmonth == 'Choose'){
        res.status(400).send('Month doesnot choose');
           return
    }
    //------------- stop Month ----------
    if(req.body.edit_lastmonth == 'Choose'){
        res.status(400).send('Month doesnot choose');
           return
    }
    //------------ Line -----------------
    if(req.body.edit_line == 'Choose'){
        res.status(400).send('Line doesnot choose');
           return
    }

    //------------ check condition Day
    if(req.body.edit_day == 'Mon'){
        edit_day = 'Mon';
    }else if(req.body.edit_day == 'Tue'){
        edit_day = 'Tue';
    }else if(req.body.edit_day == 'Wed'){
        edit_day = 'Wed';
    }else if(req.body.edit_day == 'Thu'){
        edit_day = 'Thu';
    }else if(req.body.edit_day == 'Fri'){
        edit_day = 'Fri';
    }else if(req.body.edit_day == 'Sat'){
        edit_day = 'Sat';
    }else if(req.body.edit_day == 'Sun'){
        edit_day = 'Sun';
    }
    // check condition Month
    if(req.body.edit_startmonth == 'January'){
        edit_startmonth = 'January'
    }else if(req.body.edit_startmonth == 'February'){
        edit_startmonth = 'February'
    }else if(req.body.edit_startmonth == 'March'){
        edit_startmonth = 'March'
    }else if(req.body.edit_startmonth == 'April'){
        edit_startmonth = 'April'
    }else if(req.body.edit_startmonth == 'May'){
        edit_startmonth = 'May'
    }else if(req.body.edit_startmonth == 'June'){
        edit_startmonth = 'June'
    }else if(req.body.edit_startmonth == 'July'){
        edit_startmonth = 'July'
    }else if(req.body.edit_startmonth == 'August'){
        edit_startmonth = 'August'
    }else if(req.body.edit_startmonth == 'September'){
        edit_startmonth = 'September'
    }else if(req.body.edit_startmonth == 'October'){
        edit_startmonth = 'October'
    }else if(req.body.edit_startmonth == 'November'){
        edit_startmonth = 'November'
    }else if(req.body.edit_startmonth == 'December'){
        edit_startmonth = 'December'
    }

    // check condition last month
    if(req.body.edit_lastmonth == 'January'){
        edit_lastmonth = 'January'
    }else if(req.body.edit_lastmonth == 'February'){
        edit_lastmonth = 'February'
    }else if(req.body.edit_lastmonth == 'March'){
        edit_lastmonth = 'March'
    }else if(req.body.edit_lastmonth == 'April'){
        edit_lastmonth = 'April'
    }else if(req.body.edit_lastmonth == 'May'){
        edit_lastmonth = 'May'
    }else if(req.body.edit_lastmonth == 'June'){
        edit_lastmonth = 'June'
    }else if(req.body.edit_lastmonth == 'July'){
        edit_lastmonth = 'July'
    }else if(req.body.edit_lastmonth == 'August'){
        edit_lastmonth = 'August'
    }else if(req.body.edit_lastmonth == 'September'){
        edit_lastmonth = 'September'
    }else if(req.body.edit_lastmonth == 'October'){
        edit_lastmonth = 'October'
    }else if(req.body.edit_lastmonth == 'November'){
        edit_lastmonth = 'November'
    }else if(req.body.edit_lastmonth == 'December'){
        edit_lastmonth = 'December'
    }

    // check condition line amout
    if(req.body.edit_line== '1'){
        edit_line = '1'
    }else if(req.body.edit_line== '2'){
        edit_line = '2'
    }else if(req.body.edit_line== '3'){
        edit_line = '3'
    }else if(req.body.edit_line== '4'){
        edit_line = '4'
    }

    let newStaffSchedule = StaffSchedule({
        edit_id:req.body.edit_id,
        edit_name:req.body.edit_name,
        edit_surname:req.body.edit_surname,
        edit_position:req.body.edit_position,
        edit_dept:req.body.edit_dept,
        edit_status:req.body.edit_status,
        edit_day:edit_day,
        edit_startmonth:edit_startmonth,
        edit_lastmonth:edit_lastmonth,
        edit_line:edit_line
    }) 

    /*
    console.log(edit_id)
    console.log(edit_name)
    console.log(edit_surname)
    console.log(edit_position)
    console.log(edit_dept)
    console.log(edit_status)
    console.log(edit_day)
    console.log(edit_startmonth)
    console.log(edit_lastmonth)
    console.log(edit_line)
    */

    newStaffSchedule.save().then((doc)=>{
        res.send(doc)
    },(err)=>{
        res.status(400).send(err)
    })
})

//------------------------------- Port -----------------------------------------------------//
app.listen(3000,()=>{
    console.log(' ##### listening on port 3000 #####')
})

