import logo1 from "../assets/images/instagram.png"
import logo2 from "../assets/images/twitter.png"
import logo3 from "../assets/images/linkedin.png"

function Contact() {
    return ( 
        <div className="contact">
            <div >
                
<a href ="https://www.instagram.com/eter__studio/" className="navbar-logo"><img src={logo1} className="logo" alt="ETER logo"/></a>
<a href="https://twitter.com/eter__studio"  className="navbar-logo"><img src={logo2} className="logo" alt="ETER logo"/></a>
<a  href="https://www.linkedin.com/company/eter-studio/" className="navbar-logo"><img src={logo3} className="logo" alt="ETER logo"/></a>
                <p className="creative">eter@eter.studio</p>
            </div>
        </div>
     );
}

export default Contact;