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
        createdDate:{
            type:Date,
            default: Date.now
        },
    });

    const User = moongoose.model('USER',schema);

    module.exports = User;