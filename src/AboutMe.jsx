import "./AboutMe.css";
import Mee from "./assets/Mee.png";
import Navigation, { NavMobile } from "./Navigation";
import "./NavMobile.css";
export default function AboutMe() {
  return (
    <>
      <div className="about-container">
        <Navigation />
        <NavMobile />
        <div className="about-me">
          <div>
            <img src={Mee} alt="portait" />
          </div>
          <div className="about-item">
            <h1>About Me</h1>
            <p>
              I’m a versatile and forward-thinking web developer, passionate
              about turning ideas into intuitive, functional digital
              experiences. My journey into tech began with a deep curiosity for
              how the tools we use every day are built, and that curiosity has
              evolved into a commitment to crafting well-designed, performant
              websites. <br />
              <br />I enjoy blending creativity with logic—writing clean code,
              building smooth interfaces, and ensuring every project feels both
              modern and meaningful. Over the years, I’ve developed a strong
              foundation in JavaScript, React, and backend technologies, giving
              me the ability to handle everything from interactive front-end
              components to robust server-side logic.
              <br />
              <br />
              Whether I’m working on a landing page, a full-stack application,
              or solving complex UI challenges, I aim to deliver clean, scalable
              solutions. I prioritize user experience, performance, and
              maintainability in every project I take on. Beyond coding, I love
              learning, exploring new technologies, and finding smarter ways to
              build. Every project is an opportunity to grow, refine my skills,
              and create something that truly stands out. <br />
              <br />
              My goal is simple: to build digital products that are visually
              engaging, technically solid, and genuinely useful. If you’re
              looking for someone passionate, dedicated, and detail-oriented,
              then you’re in the right place.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
