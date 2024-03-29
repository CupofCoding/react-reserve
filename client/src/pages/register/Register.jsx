import "./register.css"
import { Link } from 'react-router-dom';

const Register = () => {
    return (
      <div className="styled-container styled-container-register">
        <div className="styled-wrapper styled-wrapper-register">
          <h1 className="styled-title styled-title-register">CREATE AN ACCOUNT <Link to='/'><h1 className="styled-logo-register">PeasTravel.</h1></Link></h1 >          
          <form className="styled-title styled-form-register">
            <input className="styled-input styled-input-register" placeholder="name" />
            <input className="styled-input styled-input-register" placeholder="last name" />
            <input className="styled-input styled-input-register" placeholder="username" />
            <input className="styled-input styled-input-register" placeholder="email" />
            <input className="styled-input styled-input-register" placeholder="password" />
            <input className="styled-input styled-input-register" placeholder="confirm password" />
            <span className="styled-input styled-agreement-register">
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>.
            </span>
            <button className="styled-button styled-button-register">CREATE</button>
          </form>
        </div>      
      </div>
    )
  }
  
  export default Register