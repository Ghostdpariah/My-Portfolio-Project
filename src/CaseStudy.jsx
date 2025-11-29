import maskImageOne from "./assets/maskImageOne.png";
import maskImageTwo from "./assets/maskImageTwo.png";
import maskImageThree from "./assets/maskImageThree.png";
import arrowLeft from "./assets/arrowLeft.png";
import { Link } from "react-router-dom";

export default function CaseStudy() {
  return (
    <div className="case-container">
      <div className="header-item">
        <h1>Case Studies</h1>
        <p>
          Solving user & business problems since last 15+ years.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </div>
      <div className="grid-container">
        <div className="grid-item-one">
          <span>Fintech</span>
          <h2> Work here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <button>View Case Study {">"}</button>
        </div>
        <div>
          <img src={maskImageOne} />
        </div>

        <div>
          <img src={maskImageTwo} />
        </div>
        <div className="grid-item-two">
          <span>EdTech</span>
          <h2> Work here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <button>View Case Study {">"}</button>
        </div>

        <div className="grid-item-three">
          <span>Pharma</span>
          <h2> Work here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <button>View Case Study {">"}</button>
        </div>
        <div>
          <img src={maskImageThree} />
        </div>
      </div>
      <div class="return-home-recent">
        <Link to="/">
          <button class>
            <img src={arrowLeft} alt="Go home" />
          </button>
        </Link>
      </div>
    </div>
  );
}
