import React from "react";
import { Link } from "react-router-dom";
import './css/Signup.css';
const  Sign_Up = () => {
  
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
                        <h2>Sign Up Here</h2>
                        
                    </section>
                        <div className="input-container name">
                            <label  htmlFor="name">Enter Your Name
                            </label>
                            <input type='text' name='name' id='name' autocomplete='off'  
                            placeholder='Enter Your Name'></input>
                        </div>
                        
                        <div className="input-container email">
                            <label htmlFor="email">
                           Email
                            </label>
                            <input type='email' name='email' id='email'
                         autocomplete='off'
                       
                             placeholder='Enter Your Email'></input>
                        </div>
                        <div className="input-container phone">
                            <label htmlFor="phone">
                            phone
                            </label>
                            <input type='phone' name='phone' id='phone'
                               autocomplete='off'
                      
                             placeholder='Enter Your phone'></input>
                        </div>
                        <div className="input-container adress">
                            <label htmlFor="adress">
                           Adress
                            </label>
                            <input type='adress' name='adress' id='adress' 
                             autocomplete='off' 
                            
                            placeholder='Enter Your Adress'></input>
                        </div>
                        <div className="input-container password">
                            <label htmlFor="password">
                            password
                            </label>
                            <input type='password' name='password' id='password' 
                            autocomplete='off'
                             placeholder='Enter Your password'>
                             </input>
              
                         </div>
                
                        
                        <button  className="signup-btn" type='submit' >
                        
                        Sign Up</button>
                    
                        <Link to='/Login'> I already have an account</Link>
                       
                    </form>
                </div>
               
                 
             </div>  
    </> 
           
         
 );
 }
export default Sign_Up; 