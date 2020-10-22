import React from 'react';
import githubLogo from "../../assets/Logos/github-logo-white.png";
import linkedinLogo from "../../assets/Logos/LIN.png";


function Footer() {
    return (
        <footer>
            <a className="footerLink" href="https://github.com/akutozo">
                <img src={githubLogo} alt="githubprofile" style={{ width: "20%" }}/>
            </a>
            <a className="footerLink" href="https://www.linkedin.com/in/jacobdaughtry/">
                <img src={linkedinLogo} alt="linkedinprofile" style={{ width: "20%" }}/>
            </a>
        </footer>
    )
}

export default Footer;