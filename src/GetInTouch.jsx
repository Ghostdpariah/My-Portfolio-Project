import "./GetInTouch.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import arrowLeft from "./assets/arrowLeft.png";
import Navigation from "./Navigation";

export default function GetInTouch() {
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleEmailInput(e) {
    setUserEmail(e.target.value);
  }

  function handleMobileInput(e) {
    setUserMobile(e.target.value);
  }

  function handleMessageInput(e) {
    setUserMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserEmail("");
    setUserMobile("");
    setUserMessage("");
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container">
        <Navigation />

        {isSubmitted ? (
          <div className="thank-you">
            <h1>Thank You!</h1>
            <p>Your message has been received. I’ll get back to you shortly.</p>

            <div className="return-button">
              <Link to="/">
                <button>
                  <img src={arrowLeft} alt="Go home" />
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <h1>Get in Touch</h1>
            <p>
              Feel free to get in touch — I’m always open to new projects,
              collaborations, and opportunities to build meaningful digital
              experiences
            </p>

            <form>
              <label htmlFor="email"> Email</label>
              <div>
                <input
                  type="email"
                  name="Email"
                  value={userEmail}
                  onChange={handleEmailInput}
                />
              </div>

              <label>Mobile</label>
              <div>
                <input
                  type="tel"
                  name="Mobile"
                  value={userMobile}
                  onChange={handleMobileInput}
                />
              </div>

              <label>Message</label>
              <div className="message">
                <input
                  type="text"
                  name="Message"
                  value={userMessage}
                  onChange={handleMessageInput}
                />
              </div>
              <div className="submit-button">
                <button type="submit" onClick={handleSubmit}>
                  <span>Submit {">"}</span>
                </button>
              </div>
            </form>

            <div className="return-button">
              <Link to="/">
                <button>
                  <img src={arrowLeft} alt="Go home" />
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
