import quote from "./assets/quote.png";
import rectangeImg from "./assets/rectangleImg.png";
import clientOne from "./assets/clientOne.png";
import arrowLeft from "./assets/arrowLeft.png";
import { Link } from "react-router-dom";

export default function Testimonial() {
  return (
    <>
      <div className="testimonial-container">
        <div className="heading-item">
          <h1> Testimonials</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className="testimonial">
          <div className="testimonial-item">
            <div>
              <img src={quote} alt="quote" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <div className="client-flex">
              <img src={clientOne} />
              <p>Sandra Bulock</p>
            </div>
          </div>
          <div className="testimonial-item">
            <div>
              <img src={quote} alt="quote" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <div className="client-flex">
              <img src={clientOne} />
              <p>Sandra Bulock</p>
            </div>
          </div>
          <div className="testimonial-item">
            <div>
              <img src={quote} alt="quote" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <div className="client-flex">
              <img src={clientOne} />
              <p>Sandra Bulock</p>
            </div>
          </div>
          <div className="testimonial-item">
            <div>
              <img src={quote} alt="quote" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <div className="client-flex">
              <img src={clientOne} />
              <p>Sandra Bulock</p>
            </div>
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
