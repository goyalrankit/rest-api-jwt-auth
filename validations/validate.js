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
    
        password: Joi.string()
            .min(6)
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    
        cpassword: Joi.ref('password')    
    });  
    return schema.validate(reqBody);
};

module.exports.validationRegister = validationRegister;



