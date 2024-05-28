import { useState } from 'react';
import './Login.css';
import { FaClipboardUser, FaLock, FaEnvelope, FaCircleInfo } from "react-icons/fa6";


function Login() {
    const [action, setAction] = useState('');
    const registerLink = () => {
        setAction(" active");
    };
    const loginLink = () => {
        setAction("");
    };
    const verifyRegisteration = () => {
        setAction(" reg-verify");
    };

  return (
    <div className={`wrapper${action}`}>
      <div className="form-box login">
        <form action=''>
            <h1>Login</h1>
            <div className="input-box">
                <input type='text' placeholder='Username' required />
                <FaClipboardUser className='icon' />
            </div>
            <div className="input-box">
                <input type='password' placeholder='Password' required />
                <FaLock className='icon' />
            </div>
            <div className="remember-me">
                <label>
                    <input type='checkbox' />
                    Remember Me
                </label>
                <a href='#'>Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
                <p>Don&apos;t have an account? <a href='#' onClick={registerLink}> Register</a>
                </p>
            </div>
        </form>
      </div>
      
      <div className="form-box register">
        <form action=''>
            <h1>Register</h1>
            <div className="input-box">
                <input type='text' placeholder='Username' required />
                <FaClipboardUser className='icon' />
            </div>
            <div className="input-box">
                <input type='text' placeholder='Email' required />
                <FaEnvelope className='icon' />
            </div>
            <div className="input-box">
                <input type='password' placeholder='Password' required />
                <FaLock className='icon' />
            </div>
            <div className="remember-me">
                <label>
                    <input type='checkbox' required />
                    I agree to the terms & conditions
                </label>
            </div>
            <button type="submit">Register</button>
            <div className="register-link">
                <p><a href='#' onClick={verifyRegisteration}>Verify</a></p>
                <p>Already have an account? <a href='#' onClick={loginLink}>Login</a></p>
            </div>
        </form>
      </div>
      
      <div className="form-box reg-verify">
        <form action=''>
            <h1>Verify Email</h1>
            <br/>
            <h3>Please enter your OTP</h3>
            <p className='verifyInfo'><small><FaCircleInfo /> Check your email for the OTP</small></p>
            <div className="input-otp">
                <input type='text' maxLength='1' placeholder='0' autoFocus required /> &nbsp;
                <input type='text' maxLength='1' placeholder='0' required /> &nbsp;
                <input type='text' maxLength='1' placeholder='0' required /> 
                <h2> &nbsp; _ &nbsp; </h2>
                <input type='text' maxLength='1' placeholder='0' required /> &nbsp;
                <input type='text' maxLength='1' placeholder='0' required /> &nbsp;
                <input type='text' maxLength='1' placeholder='0' required />
            </div>
            <br/>
            <input type='hidden' name='otp' id='otp' />
            <br/>
            <button type="submit">Verify</button>
            <div className="register-link">
                <p>Already have an account? <a href='#' onClick={loginLink}>Login</a></p>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
