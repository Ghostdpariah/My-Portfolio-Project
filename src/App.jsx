import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RecentWork from "./RecentWork";
import Testimonial from "./Testimonial";
import GetInTouch from "./GetInTouch";
import AboutMe from "./AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recentWork" element={<RecentWork />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/getInTouch" element={<GetInTouch />} />
        <Route path="/AboutMe" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
