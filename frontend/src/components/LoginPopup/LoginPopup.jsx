import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'


const LoginPopup = ({setShowLogin, handleLogin}) => {

    const[currState,setCurrState] = useState("Login");

    const handleLogout = () => {
      setShowLogin(false);
    };

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currState}</h2>
            {
              !setShowLogin && (
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt='' />
              )
            }
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button onClick={currState === "Login" ? handleLogin : handleLogout}>
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms and conditions of the privacy policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create a New Account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
        }       
      </form>
    </div>
  )
}

export default LoginPopup
