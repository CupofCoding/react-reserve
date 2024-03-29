import "./login.css"
// import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className="styled-container styled-container-login">
        <div className="styled-wrapper styled-wrapper-login">
          <h1 className="styled-title styled-title-login">
            <Link to='/'><h1>PeasTravel.</h1></Link>
          </h1>
          <form className="styled-form styled-form-login">
            <input className="styled-input styled-input-login" placeholder='username'/>
            <input className="styled-input styled-input-login" placeholder='password'/>
            <button className="styled-input styled-button styled-button-login">Login</button>
            <Link to='#'>Forgot Password?</Link>
            <Link to='/register'>Create New Account</Link>
          </form>
        </div>
      </div>
    );
  }
  
  export default Login;