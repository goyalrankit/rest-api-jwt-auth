# React Client/Server Project

#   How to run the Project?
    cd rest-api-jwt-auth/server
    nodemon index.js
    or
    node index.js

#   What's in index.js?    
    Database connection
    All Routes
    Server implementation running at port 5000

#   How to run and test with Postman 
    -> run project     
    -> Port number will be 5000
    -> Check console :Server running message shoule be consoled 
  
#  ADMIN ROUTES    

    [✓]  Admin registration requires unique Business Number
    [✓]  Admn Login just requires Email and Password
    [✓]  Generates Auth-Token
    [✓]  Admin can reset password without doing Login using business number and Email as credentials 
    [✓]  Admin can active and deactive the Users.

    Routes used for admin access:
    -> http://localhost:5000/restaurant/admin/register
    -> http://localhost:5000/restaurant/admin/login
    : http://localhost:5000/restaurant/admin/reset-password
    : http://localhost:5000/restaurant/admin/status


#   USER ROUTES
    [✓]  User registration requires unique Question and Answer
    [✓]  User Login just requires Email and Password
    [✓]  Generates Auth-Token
    [✓]  User can also reset password without doing Login using the Security question and answer that are requested and verified during New Password.
    [✓]  User can post/ask the Questions.
    [✓]  User can also Edit the Profile Details like Security Question, Security Answer,Password but not the Email.
    

    Routes used for Users access:
   -> http://localhost:5000/restaurant/user/register
   -> http://localhost:5000/restaurant/user/login
   -> http://localhost:5000/restaurant/user/edit-profile
   -> http://localhost:5000/restaurant/user/reset-password
   -> http://localhost:5000/restaurant/user/profile

#   FAQ ROUTES
   -> http://localhost:5000/restaurant/user/faq 


# Implementation 

    [✓] ADMIN MODULE
    [✓] USER MODULE
    [✓] FAQ MODULE
    
    [✓] Passwords Encryption Hash password
    [✓] Validations on all Fields 
    [✓] Unable to register with already registered Email
    
    [✓] Creating and assigning JWT Tokens 
    [✓] Using Middleware
    [✓] Authorization to Private Routes



#   Validation 1 using Joi
    Name     type name check
    Email    type email check
    Password regular-expression
    cpassword match
#   Validation 2 using Joi
    Moved to separate files
    Duplicate Email validation 
    Hash Password 
#   
    Login routing
    Login verifiation 
    Email and hash password check
    
#
    Creating and assigning JWT Tokens 
    Using Middleware
    Authorization to Private Routes

#   Changed the Schema
    Added field:
    1)  Phone
    2)  Gender
    3)  Security Question
    4)  Security Answer

#   Reset Password 
    Check user and security answer
    Hash new password
    Update New password in DB
    Reset the Password
    
#    Update Profile

    Edit Profile
    Update field in Database

#   Schema Changed
    Added Bio
    Added Address
     
#   New Model Added
    Question asked by User will be saved User as well as in  New Collection   
    New Collection -> FAQ 

#   Schema of FAQ collection
    UserName
    UserEmail
    Question
    Answer
    Status    

#   ADMIN PANEL
    Register ADMIN 
    FOR ADMIN 
    Business Number is Must
    
