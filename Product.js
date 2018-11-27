const mongoose = require('mongoose')
var Schema = mongoose.Schema

// ------------------------------ Product Schema -------------------------------------
var ProductSchema = new Schema({
    productID:{
        type:String,
        required:true,
        unique:true,
        minlength:5
    },
    producType:{
        type:String,
        required:true
    },
    productSize:{
        type:String,
        required:true
    },
    weight_min:{
        type:String,
        required:true
    },
    weight_max:{
        type:String,
        required:true
    },
    length_min:{
        type:String,
        required:true
    },length_max:{
        type:String,
        required:true
    }
})

var Product = mongoose.model('Product',ProductSchema)

module.exports = Product