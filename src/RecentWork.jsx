import "./RecentWork.css";
import arrowLeft from "./assets/arrowLeft.png";
import arrowRight from "./assets/arrowRight.png";

import room from "./assets/room.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import github from "./assets/github.svg";
import browser from "./assets/browser.svg";
import profit from "./assets/profit.png";
import sunnySide from "./assets/sunnySide.jpg";
import meet from "./assets/meet.png";
import Navigation, { NavMobile } from "./Navigation";
import "./NavMobile.css";

const slideObject = [
  {
    headingOne: "Room",
    paragraphOne:
      "Designing digital experiences that feel natural and engaging. This interactive 3D room showcases thoughtful UI choices, clean visuals, and effortless user interaction.",
    imageOne: room,
    githubOne: "https://github.com/Ghostdpariah/Room-React.git",
    websiteOne: "https://room-react.vercel.app/",

    headingTwo: "Sunnyside",
    paragraphTwo:
      "A fully responsive landing page built with clean component architecture, optimized assets, and modern layout techniques. Designed to demonstrate pixel-perfect UI implementation.",
    imageTwo: sunnySide,
    githubTwo: "https://github.com/Ghostdpariah/sunnyside-project.git",
    websiteTwo: "https://sunnyside-project-gray.vercel.app/",
  },

  {
    headingOne: "Profit Predictor",
    paragraphOne:
      "Profit Predictor simulates investment vs. sales scenarios, helping users forecast profit goals and make smarter financial decisions by estimating returns and business outcomes before they commit.",
    imageOne: profit,
    githubOne: "https://github.com/Ghostdpariah/Profit-Predictor.git",
    websiteOne: "https://profit-predictor-seven.vercel.app/",

    headingTwo: "Meet",
    paragraphTwo:
      "A modern meet-up landing page engineered with , semantic structure, and responsive design patterns. Built to highlight clean UI implementation and efficient front-end workflow..",
    imageTwo: meet,
    githubTwo: "https://github.com/Ghostdpariah/Meet.git",
    websiteTwo: "https://meet-beryl-five.vercel.app/",
  },
];

export default function RecentWork() {
  const [index, setIndex] = useState(0);

  const totalSlides = slideObject.length;
  const currentSlide = slideObject[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <>
      <Navigation />
      <NavMobile />
      <div className="work-container">
        <div className="work-item">
          <h1>Recent Works</h1>
        </div>
        <div className="flex-container">
          <div className="work-1">
            <div className="image-container">
              <img src={currentSlide.imageOne} />
            </div>
            <div className="tags">
              <p className="html">Html</p>
              <p className="css">Css</p>
              <p className="javascript">Javascript</p>
              <p className="react">React</p>
            </div>
            <div>
              <h2>{currentSlide.headingOne}</h2>
              <p>{currentSlide.paragraphOne}</p>
            </div>
            <div className="view-button">
              <button
                className="view-code"
                onClick={() => window.open(currentSlide.githubOne, "_blank")}
              >
                <img src={github} alt="github-icon" />
                <span>View code</span>
              </button>
              <button
                className="view-website"
                onClick={() => window.open(currentSlide.websiteOne, "_blank")}
              >
                <img src={browser} alt="website-icon" />
                <span>View website</span>
              </button>
            </div>
          </div>

          <div className="work-2">
            <div className="image-container">
              <img src={currentSlide.imageTwo} />
            </div>
            <div className="tags">
              <p className="html">Html</p>
              <p className="css">Css</p>
              <p className="javascript">Javascript</p>
            </div>
            <div>
              <h2>{currentSlide.headingTwo}</h2>
              <p>{currentSlide.paragraphTwo}</p>
            </div>
            <div className="view-button">
              <button
                className="view-code"
                onClick={() => window.open(currentSlide.githubTwo, "_blank")}
              >
                <img src={github} />
                <span>View code</span>
              </button>
              <button
                className="view-website"
                onClick={() => window.open(currentSlide.websiteTwo, "_blank")}
              >
                <img src={browser} />
                <span>View website</span>
              </button>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button onClick={handlePrev} className="arrow-left">
            <img src={arrowLeft} />
          </button>
          <button onClick={handleNext} className="arrow-right">
            <img src={arrowRight} />
          </button>
        </div>
      </div>
    </>
  );
}
