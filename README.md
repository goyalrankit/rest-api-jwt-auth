# rest-api-jwt-auth

# 
    How to run the Project?
    cd rest-api-jwt-auth
    nodemon index.js
#   Whats is in index.js?    
    Connecting to Database
    Calling all routes
    Server port implementation 

#   Using postman 
    -> run project 
    -> check console Server is working 

    -> Port number : 5000
    -> http://localhost:5000/restaurant/user/register
    -> http://localhost:5000/restaurant/user/login
# 
    Server Setup runs at port 5000
# 
    Added the Register Route
    Added the Login Route
# 
    Securing Password and connection using Dotenv
    Connecting to Mongo Db

# 
    Implemented the User Schema
    Name:
    Email:
    Password:
    Date:

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
    