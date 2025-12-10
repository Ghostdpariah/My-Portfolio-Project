import quote from "./assets/quote.png";
import clientOne from "./assets/clientOne.png";
import arrowLeft from "./assets/arrowLeft.png";
import { Link } from "react-router-dom";
import avatarOne from "./assets/avatarOne.png";
import avatarTwo from "./assets/avatarTwo.png";
import avatarThree from "./assets/avatarThree.png";
import Lanre from "./assets/Lanre.png";
import "./Testimonial.css";
import Navigation from "./Navigation";

export default function Testimonial() {
  return (
    <>
      <div className="testimonial-container">
        <Navigation />
        <div className="heading-item">
          <h1> Reviews</h1>
          {/* <p>
            He delivered outstanding work, combining sharp creativity with
            clean, efficient code that elevated the entire project experience
            and exceeded all expectations..{" "}
          </p> */}
        </div>
        <div className="testimonial">
          <div className="testimonial-item">
            <div className="quote">
              <img src={quote} alt="quote" />
            </div>
            <p>
              An exceptional project outcome overall, with seamless
              communication, timely delivery, and impressive technical skill.{" "}
            </p>
            <div className="client-flex">
              <img src={avatarTwo} />
              <p>Chinedu Okafor</p>
            </div>
            {/* <div className="work-tittle">
              Digital Marketing Strategist. HubSpot. Nigeria
            </div> */}
          </div>
          <div className="testimonial-item">
            <div className="quote">
              <img src={quote} alt="quote" />
            </div>
            <p>
              The quality of the build was remarkable, showcasing strong
              attention to detail, modern styling, and precise functionality.{" "}
            </p>
            <div className="client-flex">
              <img src={avatarOne} />
              <p>Adesuwa Martins</p>
            </div>
            {/* <div className="work-tittle">Sales Manager. Jumia. Nigeria</div> */}
          </div>
          <div className="testimonial-item">
            <div className="quote">
              <img src={quote} alt="quote" />
            </div>
            <p>
              A highly reliable developer who transformed ideas into polished
              results, demonstrating advanced problem-solving abilities.{" "}
            </p>
            <div className="client-flex">
              <img src={Lanre} />
              <p>Lanre Adeolu</p>
            </div>
            {/* <div className="work-tittle">
              Senior Developer. TechAccent. Nigeria
            </div> */}
          </div>
          <div className="testimonial-item">
            <div className="quote">
              <img src={quote} alt="quote" />
            </div>
            <p>
              The quality of the build was remarkable, showcasing strong
              attention to detail, modern styling, and precise functionality.{" "}
            </p>
            <div className="client-flex">
              <img src={avatarThree} />
              <p>Daniel Harris</p>
            </div>
            {/* <div className="work-tittle">
              Senior Software Engineer. Revoult. United Kingdom
            </div> */}
          </div>
        </div>
        <Link to="/">
          <button>
            <img src={arrowLeft} alt="Go home" />
          </button>
        </Link>
      </div>
    </>
  );
}
