// Validation dependency
const Joi = require('@hapi/joi');

// Validation Schema for Register
const validationRegister = reqBody => {

    const schema = Joi.object({
        name: Joi.string()
                 .min(3)
                 .max(30)
                 .required(),
        
        email: Joi.string()
                  .required()    
                  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','gov','edu'] } }),
         
        phone: Joi.string()
                  .min(10)
                  .max(11)
                  .required(),    
        
        gender: Joi.string()
                   .required(),    
    
        password: Joi.string()
                     .min(6)
                     .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    
        cpassword: Joi.ref('password'),
        
        question: Joi.string()
                     .min(3)
                     .max(20)
                     .required()   
    });  
    return schema.validate(reqBody);
};

// Validation Schema for Login
const validationLogin = reqBody => {

    const schema = Joi.object({      
        email: Joi.string()
            .required()    
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','gov','edu'] } }),
    
        password: Joi.string()
            .min(6)
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    });  
    return schema.validate(reqBody);
};

// Validation Schema for Reset Password
const validationPasswordReset = reqBody => {

    const schema = Joi.object({      
        email: Joi.string()
                  .required()    
                  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','gov','edu'] } }),
    
        question: Joi.string()
                     .min(3)
                     .required(),
        
        password: Joi.string()
                     .min(6)
                     .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))             
    });  
    return schema.validate(reqBody);
};



module.exports.validationRegister = validationRegister;
module.exports.validationLogin = validationLogin;
module.exports.validationPasswordReset = validationPasswordReset;

