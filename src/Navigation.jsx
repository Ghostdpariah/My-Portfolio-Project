import smIcon from "./assets/smIcon.png";
import { Link } from "react-router-dom";
import hamburger from "./assets/hamburger.svg";
import github from "./assets/github.svg";
import browser from "./assets/browser.svg";

function Navigation() {
  return (
    <div>
      <nav>
        <div className="navigation">
          <Link to="/"> Home</Link>
          <Link to="/recentWork"> Recent work</Link>
          <Link to="/testimonial"> Reviews</Link>
          <Link to="/AboutMe"> About Me</Link>
          <Link to="/getInTouch"> Get In Touch</Link>
        </div>
      </nav>
    </div>
  );
}

function NavMobile() {
  return (
    <div className="mobile-navigation">
      <nav className="navigation-mobile">
        <div className="hamburger-container">
          <img src={hamburger} />
        </div>
        <div className="social-container">
          <img src={github} />
          <img src={browser} />
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
export { NavMobile };
