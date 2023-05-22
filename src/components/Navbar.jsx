import React, { useState } from 'react';
import logo from "../assets/logo.svg";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Projects from "./Projects";
import Press from "./Press";

function Navbar() {
  const [activeSection, setActiveSection] = useState(0);

  const handleSectionClick = (index) => {
    setActiveSection(index);

    // Change the background image based on the section clicked
    switch (index) {
      case -1:
        document.body.style.backgroundImage = "url('/src/assets/images/fondo4.png')";
        break;
      case 0:
        document.body.style.backgroundImage = "url('/src/assets/images/lab.png')";
        break;
      case 1:
        document.body.style.backgroundImage = "url('/src/assets/images/fondo5.png')";
        break;
      case 2:
        document.body.style.backgroundImage = "url('/src/assets/images/fondo2.png')";
        break;
      case 3:
        document.body.style.backgroundImage = "url('/src/assets/images/lab.png')";
        break;
      case 4:
        document.body.style.backgroundImage = "url('/src/assets/images/fondo6.png')";
        break;
      default:
        // Handle the default case or do nothing
        break;
    }
    document.body.style.backgroundSize = "cover";

  };

  const handleLogoClick = () => {
    setActiveSection(0);
    // set the active section to -1 to indicate that the logo was clicked

    // Set the default background image here if desired
    document.body.style.backgroundImage = "url('/src/assets/images/default-background.jpg')";
  };

  return (
    <div>
      <nav className='navbar'>
        <a className={activeSection === 0 ? 'active' : ''} onClick={() => handleSectionClick(0)}><img src={logo} className="logo" alt="ETER logo" /></a>
        <ul>
          <li className={activeSection === -1 ? 'active' : ''} onClick={() => handleSectionClick(-1)}>ABOUT US</li>
          <li className={activeSection === 1 ? 'active' : ''} onClick={() => handleSectionClick(1)}>HOW WE WORK</li>
          <li className={activeSection === 2 ? 'active' : ''} onClick={() => handleSectionClick(2)}>CONTACT</li>
          <li className={activeSection === 3 ? 'active' : ''} onClick={() => handleSectionClick(3)}>PROJECTS</li>
          <li className={activeSection === 4 ? 'active' : ''} onClick={() => handleSectionClick(4)}>PRESS</li>
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

export default Navbar;