import "./GetInTouch.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import arrowLeft from "./assets/arrowLeft.png";

export default function GetInTouch() {
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userMessage, setUserMessage] = useState("");

  function handleEmailInput(e) {
    setUserEmail(e.target.value);
  }

  function handleMobileInput(e) {
    setUserMobile(e.target.value);
  }
  function handleMessageInput(e) {
    setUserMessage(e.target.value);
  }
  // const [isSubmitted, setSubmitted] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log("Submitted:", formData);
  //   setSubmitted(true);

  // You can send data to backend here
  // };

  return (
    <div className="form-container">
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
            placeholder="Input email"
            onChange={handleEmailInput}
          />
        </div>

        <label>Mobile</label>
        <div>
          <input
            type="tel"
            name="Mobile"
            placeholder="Input mobile number"
            onChange={handleMobileInput}
          />
        </div>

        <label>Message</label>
        <div className="message">
          <input type="text" name="Message" onChange={handleMessageInput} />
        </div>
        <div className="submit-button">
          <button type="submit">
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
    </div>
  );
}
