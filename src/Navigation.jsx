import smIcon from "./assets/smIcon.png";
import { Link } from "react-router-dom";
import hamburger from "./assets/hamburger.svg";
import github from "./assets/github.svg";
import browser from "./assets/browser.svg";
import { useState } from "react";

function Navigation() {
  return (
    <div>
      <nav>
        <div className="navigation">
          <Link to="/"> Home</Link>
          <Link to="/recentWork"> Recent work</Link>
          <Link to="/testimonial"> Reviews</Link>
          <Link to="/AboutMe"> About me</Link>
          <Link to="/getInTouch"> Get In Touch</Link>
        </div>
      </nav>
    </div>
  );
}

function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="mobile-navigation">
      <nav className="navigation-mobile">
        <div className="hamburger-container" onClick={toggleMenu}>
          <img src={hamburger} alt="hamburger-menu" />
        </div>
        <div className="social-container">
          <img src={github} alt="github" />
          <img src={browser} alt="website-icon" />
        </div>
      </nav>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Link to="/"> Home</Link>
        <Link to="/recentWork"> Recent work</Link>
        <Link to="/testimonial"> Reviews</Link>
        <Link to="/AboutMe"> About me</Link>
        <Link to="/getInTouch"> Get In Touch</Link>
      </div>
    </div>
  );
}

export default Navigation;
export { NavMobile };
