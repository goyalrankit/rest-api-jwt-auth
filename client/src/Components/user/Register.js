import React,{ useState}  from 'react';
import AnimationPage from '../animation/AnimationPage';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const history = useHistory();

    const [user, setUser] = useState({
        "name"  :"",
        "email" :"",
        "phone" :"",
        "gender"    :"",      
        "password"  :"",
        "cpassword" :"",
        "question"  :"",
        "answer"    :""
    });

    let inputFieldName, userInputValue;
    const handleFormInputs = (e) => {
        
        inputFieldName = e.target.name;
        userInputValue = e.target.value;

        setUser({...user, [inputFieldName]:userInputValue });
    };


    const registerNewUser = async (e) =>{
        e.preventDefault();

        const { name , email , phone, gender, password, cpassword, question, answer } = user;

        const res  =   await fetch("/restaurant/user/register",{
            method  :"POST",
            headers :{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name , email , phone, gender, password, cpassword, question, answer
            })
        });

        const data = await res.json();

           if(data.message === "User Registered Succesfully")
           {
           toast.success("User Registered Succesfully, Redirecting", {
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
                        <p>Sign Up</p>
                    </div>

                    <div className="form-group row m-0">
                        <i className="zmdi zmdi-account material-icons-name zmdi-hc-2x col-2 pt-1"></i>
                        <input type="text" className="form-control item col-10" id="Name" 
                                required
                                name="name"
                                value={user.name}
                                onChange={handleFormInputs} 
                                placeholder="Name"/>
                    </div>

                    <div className="form-group row m-0">
                        <i className="zmdi zmdi-email material-icons-name zmdi-hc-2x col-2 pt-1"></i>
                        <input type="email" className="form-control item col-10 item" id="email" 
                                required
                                name="email"
                                value={user.email}
                                onChange={handleFormInputs} 
                                placeholder="Email"/>
                    </div>

                    <div className="form-group row m-0">
                        <i className="zmdi zmdi-smartphone-android material-icons-name zmdi-hc-2x col-2 pt-1"></i>
                        <input type="number" className="form-control item col-10 item" id="phone-number" 
                                required
                                name="phone"
                                value={user.phone}
                                onChange={handleFormInputs} 
                                placeholder="Phone Number"/>
                    </div>

                    <div className="form-group row m-0">
                        <i className="zmdi zmdi-accounts-alt material-icons-name zmdi-hc-2x col-2 pt-1"></i>
                        <input type="text" className="form-control item col-10 " id="gender" 
                                required
                                name="gender"
                                value={user.gender}
                                onChange={handleFormInputs} 
                                placeholder="Gender"/>
                    </div>


                    <div className="form-group row m-0">
                        <i className="zmdi zmdi-lock material-icons-name zmdi-hc-2x col-2 pt-1"></i>
                        <input type="password" className="form-control item col-10 item" id="password" 
                                required
                                name="password"
                                value={user.password}
                                onChange={handleFormInputs} 
                                placeholder="Password"/>
                    </div>

                    <div className="form-group row m-0">
                        <i className="zmdi zmdi-lock material-icons-name zmdi-hc-2x col-2 pt-1"></i>
                        <input type="password" className="form-control item col-10 item" id="cpassword" 
                                required
                                name="cpassword"
                                value={user.cpassword}
                                onChange={handleFormInputs} 
                                placeholder="Confirm Password"/>
                    </div>

                    <div className="form-group row m-0">
                        <i className="zmdi zmdi-assignment material-icons-name zmdi-hc-2x col-2 pt-1"></i>
                        <input type="text" className="form-control item  col-10" id="question" 
                                required
                                name="question"
                                value={user.question}
                                onChange={handleFormInputs} 
                                placeholder="Security Question"/>
                    </div>

                    <div className="form-group row m-0">
                        <i className="zmdi zmdi-assignment-o material-icons-name zmdi-hc-2x col-2 pt-1"></i>
                        <input type="text" className="form-control item  col-10" id="answer" 
                                required
                                name="answer"
                                value={user.answer}
                                onChange={handleFormInputs} 
                                placeholder="Security Answer"/>
                    </div>

                    <div className="form-group row m-0">
                        <button type="button" className="btn btn-block  signin-button" 
                                onClick={registerNewUser}                 
                        >Create Account</button>
                    </div>

                    <div className="login">
                        <small>Already have an account?  <button >Login</button> </small>
                    </div>

                </form>

                <div className="image">
                        <div className="image-part"></div>
                            <AnimationPage />
                </div>                
         </div>
     </div>
     <ToastContainer/>
        </>
    )    
}

export default Register;