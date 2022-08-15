import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./emailList.css"

const MailList = () => {
  return (
    <div className="email">
        <h1 className="emailTitle">Want updates to save money?</h1>
        <span className="emailDesc">Sign up to receive more info from us</span>
        <div className="emailInputContainer">
            <input type="text" placeholder="Your Email" />
            <button><FontAwesomeIcon icon={faPaperPlane} /></button>
        </div>
    </div>
  )
}

export default MailList