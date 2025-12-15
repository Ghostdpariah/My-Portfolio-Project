import Navigation, { NavMobile } from "./Navigation";
import arrow from "./assets/arrow.png";

import portraitImg from "./assets/portraitImg.png";
import "./NavMobile.css";
import Marquee from "react-fast-marquee";
import reactLogo from "./assets/reactLogo.svg.png";
import nodeLogo from "./assets/nodeJs.svg.png";
import jsLogo from "./assets/Js.svg.png";
import tailwindLogo from "./assets/tailWind.svg.png";
import html from "./assets/Html5.svg.png";
import fireBase from "./assets/fireBase.svg.png";
import typeScript from "./assets/Typescript.svg.png";
import nextJs from "./assets/nextJs.svg.png";
import mongo from "./assets/Mongo.svg.png";
import npm from "./assets/npm.svg.png";
import EsLint from "./assets/EsLint.svg.png";
import Astro from "./assets/Astro.svg.png";
import { Link } from "react-router-dom";

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
            <Link to="/getInTouch">
              <button>
                <span>Let's get started </span>
                <img src={arrow} />
              </button>
            </Link>
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
              <img src={fireBase} alt="fireBase" style={{ width: "60px" }} />
              <img src={typeScript} alt="Typescript" />
              <img
                src={nextJs}
                alt="NextJs"
                style={{
                  marginRight: "40px",
                  filter: "brightness(0) invert(1)",
                  width: "60px",
                }}
              />
              <img
                src={mongo}
                alt="MongoDB"
                style={{
                  marginRight: "40px",
                  filter: "brightness(0) invert(1)",
                }}
              />{" "}
              <img
                src={npm}
                alt="npm"
                style={{
                  marginRight: "40px",
                  filter: "brightness(15%) invert(1)",
                }}
              />{" "}
              <img
                src={EsLint}
                alt="EsLint"
                style={{
                  marginRight: "40px",
                  filter: "brightness(0) invert(1)",
                  width: "40px",
                }}
              />{" "}
              <img
                src={Astro}
                alt="Astro"
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
