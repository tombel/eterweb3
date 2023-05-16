import React, { useState } from 'react';
import logo from "../assets/logo.svg"
import Home from "./Home"
import About from "./About"
import Work from "./Work"
import Contact from "./Contact"
import Projects from "./Projects"
import Press from "./Press"

function Navbar() {
    const [activeSection, setActiveSection] = useState(0);

    const handleSectionClick = (index) => {
        setActiveSection(index);
    }

    const handleLogoClick = () => {
        setActiveSection(0);
        // set the active section to -1 to indicate that the logo was clicked
    }

    return (
        <div>
            <nav className='navbar'>
                 <a className="navbar-logo" onClick={() => handleLogoClick()}><img src={logo} className="logo" alt="ETER logo"/></a>
                <ul>
                    <li className={activeSection === -1 ? 'active' : ''} onClick={() => handleSectionClick(-1)}>ABOUT US</li>
                    <li className={activeSection === 1 ? 'active' : ''} onClick={() => handleSectionClick(1)}>HOW WE WORK</li>
                    <li className={activeSection === 2 ? 'active' : ''} onClick={() => handleSectionClick(2)}>CONTACT</li>
                    <li className={activeSection === 3 ? 'active' : ''} onClick={() => handleSectionClick(3)}>PROJECTS</li>
                    <li className={activeSection === 3 ? 'active' : ''} onClick={() => handleSectionClick(4)}>PRESS</li>
                </ul>

            </nav>
            {activeSection === -1 && <About />}
            {activeSection === 0 && <Home />}
            {activeSection === 1 && <Work />}
            {activeSection === 2 && <Contact />}
            {activeSection === 3 && <Projects />}
            {activeSection === 4 && <Press />}
        </div>
    );
}


export default Navbar