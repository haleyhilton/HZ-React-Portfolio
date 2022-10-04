import "./Footer.css";
import cowboy from "../../images/hat.png"


export default function FooterMast() {
    return (
      <div className="footer-masthead">
        <h1> Let's Work <br /> Together </h1>
        <img className='cowboy-hat' src={cowboy} alt="cowboy hat icon"/>  
      </div>
    );
  }