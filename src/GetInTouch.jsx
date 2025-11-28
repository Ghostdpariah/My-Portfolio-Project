import { useState } from "react";
import { Link } from "react-router-dom";
import arrowLeft from "./assets/arrowLeft.png";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    Email: "",
    Mobile: "",
    Message: "",
  });

  const [isSubmitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted:", formData);
    setSubmitted(true);

    // You can send data to backend here
  };

  return (
    <div className="form-container">
      <h1>Get in Touch</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <div>
          <input
            type="text"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
          />
        </div>

        <label>Mobile</label>
        <div>
          <input
            type="text"
            name="Mobile"
            value={formData.Mobile}
            onChange={handleChange}
          />
        </div>

        <label>Message</label>
        <div className="message">
          <input
            type="text"
            name="Message"
            value={formData.Message}
            onChange={handleChange}
          />
        </div>
        <div className="submit-button">
          <button type="submit">
            <span>Submit {">"}</span>
          </button>
        </div>
      </form>
      <div className="return-button">
        <Link to="/">
          <button class>
            <img src={arrowLeft} alt="Go home" />
          </button>
        </Link>
      </div>
    </div>
  );
}
