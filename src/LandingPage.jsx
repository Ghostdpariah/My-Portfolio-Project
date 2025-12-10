import Navigation, { NavMobile } from "./Navigation";
import arrow from "./assets/arrow.png";
import portrait from "./assets/portrait.png";
import Clients from "./assets/Clients.png";
import portraitImg from "./assets/portraitImg.png";
import "./NavMobile.css";
import Marquee from "react-fast-marquee";
import reactLogo from "./assets/reactLogo.svg.png";
import nodeLogo from "./assets/nodeJs.svg.png";
import jsLogo from "./assets/js.svg.png";
import tailwindLogo from "./assets/tailWind.svg.png";
import html from "./assets/Html5.svg.png";
import fireBase from "./assets/fireBase.svg.png";
import typeScript from "./assets/Typescript.svg.png";
import nextJs from "./assets/nextJs.svg.png";
import mongo from "./assets/Mongo.svg.png";

export default function LandingPage() {
  return (
    <>
      <div className="hero">
        <Navigation />
        <NavMobile />
        <div className="hero-flex-container">
          <div className="hero-item">
            <h1>Akinbo Akinwunmi</h1>
            <p>
              A dedicated web developer who transforms ideas into clean,
              responsive digital experiences through modern code and creative
              problem-solving.
            </p>
            <button>
              <span>Let's get started </span>
              <img src={arrow} />
            </button>
          </div>
          <div className="portrait">
            <img src={portraitImg} />
          </div>
        </div>
        <div className="marquee">
          <Marquee speed={40} gradient={false} pauseOnHover={true}>
            <p>My stack:</p>
            <div className="marquee-item">
              <img src={reactLogo} alt="React" />
              <img src={nodeLogo} alt="NodeJS" />
              <img src={jsLogo} alt="Javascript" />
              <img src={tailwindLogo} alt="Tailwind" />
              <img src={html} alt="Html" />
              <img src={fireBase} alt="fireBase" />
              <img src={typeScript} alt="Typescript" />
              <img
                src={nextJs}
                alt="NextJs"
                style={{
                  marginRight: "40px",
                  filter: "brightness(0) invert(1)",
                }}
              />
              <img
                src={mongo}
                alt="MongoDB"
                style={{
                  marginRight: "40px",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}
