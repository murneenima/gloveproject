const mongoose = require('mongoose')
var Schema = mongoose.Schema

//-------------------------------- Staff schedule -----------------------------------------//
var StaffScheduleSchema = new Schema({
    edit_id: {
        type: String,
        //unique: true,
        required: true,
        //minlength: 7
    },
    edit_name: {
        type: String,
        required: true
    },
    edit_surname: {
        type: String,
        required: true
    },
    edit_position: {
        type: String,
        required: true
    },
    edit_dept: {
        type: String,
        required: true
    }, 
    edit_status: {
        type: String,
        required: true
    },
    edit_day:{
        type:String,
        required:true
    },
    edit_startmonth:{
        type:String,
        required:true
    },
    edit_lastmonth:{
        type:String,
        required:true
    },
    edit_line:{
        type:String,
        required:true
    }
})

var StaffSchedule = mongoose.model('StaffSchedule',StaffScheduleSchema)

module.exports = StaffSchedule