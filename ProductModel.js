const mongoose = require('mongoose')
var Schema = mongoose.Schema

// ------------------------------ Product Schema -------------------------------------
var ProductSchema = new Schema({
    product_id:{
        type:String,
        required:true,
        unique:true,
        minlength:5
    },
    produc_type:{
        type:String,
        required:true
    },
    product_size:{
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