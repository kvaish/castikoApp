'use strict';

const mongoose = require('mongoose');

    var CastingDirectorSchema =mongoose.Schema({
        username:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        basic:{
            name:{
                type:String,
                required:true
            },
            height:{
                type:String
            },
            weight:{
                type:String
            },
            sex:{
                type:String
            },
            dob:{
                type:String
            },
            screenage:{
                type:String,
                required:true
            },
            phonenumber:{
                type:Number,
                required:true,
                unique:true
            },
            pictures:{
                type:Array
            },

        },
        projects:[{
            title:{
                type:String,
                required:true,
                unique:true
            },
            create_date:{
                type:String,
                default:Date.now(),
            }

        }]
        
    
    });

const CastingDirector = module.exports = mongoose.model('CastingDirector',CastingDirectorSchema);