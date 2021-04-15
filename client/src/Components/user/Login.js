import React, { useState } from "react";
import AnimationPageOpen from "./../animation/AnimationPageOpen";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const history = useHistory();
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const loginUser = async (e) =>{
        e.preventDefault();

        // const { email ,password } = user;

        console.log(email +""+ password)
        const res  = await fetch("/restaurant/user/login",{
            method  :"POST",
            headers :{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
             email,
             password
            })
        });

        const data = await res.json();

           if(data.message === "Login Successfull")
           {
           toast.success("Login Successfull, Redirecting", {
                            position: "top-center",
                      });
           }else{
           toast.error(data.message, {
                            position: "top-center",
                      });
           }
    }

        return (
        <>

        <div className="col-8 signin-div">
            <div className="registration-form form-part">
                <form method="POST" className="form">
                    <div className="form-icon">
                        <p>Login</p>
                    </div>


                    <div className="form-group row m-0">
                        <i className="zmdi zmdi-email material-icons-name zmdi-hc-2x col-2 pt-1"></i>
                        <input type="email" className="form-control item col-10 item" id="email" 
                                required
                                name="email"
                                value={email}
                                onChange={(e) =>setEmail(e.target.value)} 
                                placeholder="Email"/>
                    </div>

                    <div className="form-group row m-0">
                        <i className="zmdi zmdi-lock material-icons-name zmdi-hc-2x col-2 pt-1"></i>
                        <input type="password" className="form-control item col-10 item" id="password" 
                                required
                                name="password"
                                value={password}
                                onChange={(e) =>setPassword(e.target.value)} 
                                placeholder="Password"/>
                    </div>

                    <div className="form-group row m-0">
                        <button type="button" className="btn btn-block  signin-button" 
                                onClick={loginUser}                 
                        >Create Account</button>
                    </div>

                    <div className="login">
                        <small>Don't have an account?  <button >Create Account</button> </small>
                    </div>

                </form>

                <div className="image">
                        <div className="image-part"></div>
                            <AnimationPageOpen />
                </div>    
            
         </div>
     </div>
     <ToastContainer />
        </>
        )
}

export default Login;