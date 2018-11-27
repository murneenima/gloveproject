const mongoose = require('mongoose')
var Schema = mongoose.Schema

//-------------------------------Staff Schema --------------------------------------------//
var StaffSchema = new Schema({
    badgeNo: {
        type: String,
        unique: true,
        required: true,
        minlength: 7
    },
    emp_name: {
        type: String,
        required: true
    },
    emp_surname: {
        type: String,
        required: true
    },
    emp_position: {
        type: String,
        required: true
    },
    emp_dept: {
        type: String,
        required: true
    }, 
    emp_status: {
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

//-------------------------------- Staff schedule -----------------------------------------//
var StaffScheduleSchema = new Schema({
    badgeNo: {
        type: String,
        unique: true,
        required: true,
        minlength: 7
    },
    emp_name: {
        type: String,
        required: true
    },
    emp_surname: {
        type: String,
        required: true
    },
    emp_position: {
        type: String,
        required: true
    },
    emp_dept: {
        type: String,
        required: true
    }, 
    emp_status: {
        type: String,
        required: true
    },
    day:{
        type:String,
        required:true
    },
    firstmonth:{
        type:String,
        required:true
    },
    lastmonth:{
        type:String,
        required:true
    }
})

var Staff = mongoose.model('Staff', StaffSchema)
var Admin = mongoose.model('Admin', AdminSchema)
var StaffSchedule = mongoose.model('StaffSchedule',StaffScheduleSchema)

module.exports = Staff
model.exports = Admin
module.exports = StaffSchedule