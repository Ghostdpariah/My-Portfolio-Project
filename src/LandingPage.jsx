import Navigation from "./Navigation";
import arrow from "./assets/arrow.png";
import portrait from "./assets/portrait.png";
import Clients from "./assets/Clients.png";
import portraitImg from "./assets/portraitImg.png";
import RecentWork from "./RecentWork";
export default function LandingPage() {
  return (
    <>
      <div className="hero">
        <Navigation />
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
          <div class className="portrait">
            <img src={portraitImg} />
          </div>
        </div>
        <div className="work">
          <p>Worked with</p>
        </div>
        <div className="client">
          <img src={Clients} />
        </div>
      </div>
    </>
  );
}
