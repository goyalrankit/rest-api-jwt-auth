import React, { useState } from "react";
import AnimationReset from "../animation/AnimationReset";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ResetPassword = () => {

    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [password, setPassword] = useState('');


    const resetPassword = async (e) =>{
        e.preventDefault();

        const res  = await fetch("/restaurant/user/reset-password",{
            method  :"POST",
            headers :{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
             email,
             question,
             answer,
             password
            })
        });

        const data = await res.json();

           if(data.message === "Password is updated. Login with new password")
           {
            toast.success("Password is updated. Login with new password", {
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

        <div className="col-6 signin-div">
            <div className="registration-form form-part">
                <form method="POST" className="form">
                    <div className="pagetitle">
                        <p>Admin Login</p>
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
                        <i className="zmdi zmdi-badge-check material-icons-name zmdi-hc-2x col-2 pt-1"></i>
                        <input type="text" className="form-control item  col-10" id="question" 
                                required
                                name="question"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}                         
                                placeholder="Question"/>
                    </div>

                    <div className="form-group row m-0">
                        <i className="zmdi zmdi-badge-check material-icons-name zmdi-hc-2x col-2 pt-1"></i>
                        <input type="text" className="form-control item  col-10" id="answer" 
                                required
                                name="answer"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}                         
                                placeholder="Security Answer"/>
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
                                onClick={resetPassword}                 
                        >Reset Password</button>
                    </div>
                </form>

                <div className="image">
                        <div className="image-part"></div>
                            <AnimationReset />
                </div>    
            
         </div>
     </div>
     <ToastContainer />
        </>
        )
}

export default ResetPassword;