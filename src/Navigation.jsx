import smIcon from "./assets/smIcon.png";

export default function Navigation() {
  return (
    <div>
      <nav>
        <div className="navigation">
          <a href="#"> Home</a>
          <a href="#"> Case Studies</a>
          <a href="#"> Testimonials</a>
          <a href="#"> Recent work</a>
          <a href="#"> Get In Touch</a>
          <img src={smIcon} />
        </div>
      </nav>
    </div>
  );
}
