import smIcon from "./assets/smIcon.png";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <nav>
        <div className="navigation">
          <Link to="/"> Home</Link>
          <a href="#"> Case Studies</a>
          <Link to="/testimonial"> Testimonials</Link>
          <Link to="/recentWork"> Recent work</Link>
          <a href="#"> Get In Touch</a>
          <img src={smIcon} />
        </div>
      </nav>
    </div>
  );
}
