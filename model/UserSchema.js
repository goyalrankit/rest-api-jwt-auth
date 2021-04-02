const moongoose = require('mongoose');

const schema = moongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            min:3,
            max:15
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        phone:{
            type:String,
            min:10,
            max:11,
            required:true,
        },
        gender:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true,
            min:6
        },
        cpassword:{
            type:String,
            required:true,
            min:6
        },
        question:{
            type:String,
            required:true,
            min:2,
            max:20
        },
        createdDate:{
            type:Date,
            default: Date.now
        },
    });

    const User = moongoose.model('USER',schema);

    module.exports = User;