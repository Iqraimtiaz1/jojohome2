import React from "react";
import { Link } from "react-router-dom";
// import {useState,useContext} from 'react';
// import {UserContext} from '../context/UserContext';
import './css/Signup.css';



    const Login = () => {
        // const {loginUser, wait, loggedInCheck} = useContext(UserContext);
        // const [redirect, setRedirect] = useState(false);
        // const [errMsg, setErrMsg] = useState(false);
        // const [formData, setFormData] = useState({
        //     email:'',
        //     password:''
        // });
    
        // const onChangeInput = (e) => {
        //     setFormData({
        //         ...formData,
        //         [e.target.name]:e.target.value
        //     })
        // }
    
        // const submitForm = async (e) => {
        //     e.preventDefault();
    
        //     if(!Object.values(formData).every(val => val.trim() !== '')){
        //         setErrMsg('Please Fill in all Required Fields!');
        //         return;
        //     }
    
        //     const data = await loginUser(formData);
        //     if(data.success){
        //         e.target.reset();
        //         setRedirect('Redirecting...');
        //         await loggedInCheck();
        //         return;
        //     }
        //     setErrMsg(data.message);
        // }

    return (
        
            <>
             
                
                <div className="split-screen">
                    <div className="left">
                    <section className="signup-form">
                        <h1 className="form-title">  </h1>
                        </section>
                        </div>
                        <div className='right'>
                        <form>
                        <section className='copy'>
                            <h2>Login Here</h2>
                            
                        </section>
                           
                            
                            <div className="input-container email">
                                <label htmlFor="email">
                               Email
                                </label>
                                <input type='email' name='email' id='email'  autocomplete='off'
                            
                                 placeholder='Enter Your Email'></input>
                            </div>
                           
                           
                            <div className="input-container password">
                                <label htmlFor="password">
                                password
                                </label>
                                <input type='password' name='password' id='password'  autocomplete='off'
                              
                                 placeholder='Enter Your password'>
                             
                                    
                                 </input>
                            </div>
                            
                            
                            
                                <button  className="signup-btn" type='submit'> Log In</button>
                        
                            <Link to='/Sign_Up'> Not a member?</Link>
                           
                        </form>
                    </div>
                    <div>
                    
    </div>                </div>
    
                
    
              
           
        </> 
               
             
         );
         
     
    }
export default Login; 
