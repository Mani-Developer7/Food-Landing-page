import './Button.css'
// import { ButtonImages } from "../../../utils/constant/images";
import appleLogo from "/assets/images/apple-logo.png";
import googleplay from "/assets/images/google-play.png";
import { FaArrowUp } from "react-icons/fa";

const Button = ({ text, isImage, isImage1, Isround}) => {
  return (
    <div>
      <button> {isImage1 ? <img src={googleplay} className={isImage1 ? "btnImage1" : null} /> : null}
        {isImage ? <img src={appleLogo} className={isImage ? "btnImage" : null} /> : null}
        {Isround ? <FaArrowUp className='rounded-none' /> :  null }
        
        
        {text}
        </button>
    </div>
  )
}

export default Button