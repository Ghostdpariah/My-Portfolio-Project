import workImageOne from "./assets/workImageOne.png";
import workImageTwo from "./assets/workImageTwo.png";
import arrowLeft from "./assets/arrowLeft.png";
import arrowRight from "./assets/arrowRight.png";
import workImageThree from "./assets/workImageThree.jpg";
import workImageFour from "./assets/workImageFour.jpg";
import { useState, useEffect } from "react";

const slideObject = [
  {
    headingOne: "Guess My Number",
    paragraphOne:
      "Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    imageOne: workImageOne,
    headingTwo: "Dice Game",
    paragraphTwo:
      "Labore et dolore magna aliqua. sed do eiusmod tempor incididunt u labore et dolore magna.",
    imageTwo: workImageTwo,
  },

  {
    headingOne: "Profit Calculator",
    paragraphOne:
      "Crafting seamless digital solutions that elevate user jo urneys. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageOne: workImageThree,
    headingTwo: "Room",
    paragraphTwo:
      "Transforming ideas into high-impact websites & applications. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageTwo: workImageFour,
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
    <div className="work-container">
      <div className="work-item">
        <h1>Recent Work</h1>
        <p>
          Solving user & business problems since last 15+ years.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex-container">
        <div className="work-1">
          <div>
            <img src={currentSlide.imageOne} />
          </div>
          <div>
            <h2>{currentSlide.headingOne}</h2>
            <p>{currentSlide.paragraphOne}</p>
          </div>
          <button>
            {" "}
            <span>Know more {">"}</span>
          </button>
        </div>

        <div className="work-2">
          <div>
            <img src={currentSlide.imageTwo} />
          </div>
          <div>
            <h2>{currentSlide.headingTwo}</h2>
            <p>{currentSlide.paragraphTwo}</p>
          </div>
          <button>
            {" "}
            <span>Know more {">"}</span>
          </button>
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
  );
}
