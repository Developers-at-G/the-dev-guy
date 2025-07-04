'use client';
import Career from "./Career/Career";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Navigation from "./Navigation/Navigation";
import Profile from "./Profile/Profile";
import Skills from "./Skills/Skills";
import Achievement from "./Achievement/Achievement";
import Projects from "./Projects/Projects";
import CodingDemo from "./Projects/CodingDemo";
export default function Home() {
  return (
    <div className="coder-background">
      <Navigation/>
      <Profile/>
      <Skills/>
      <Career/>
      <CodingDemo/> 
      <Projects/>
      <Education/>
      <Achievement/> 
      <Contact/>
    </div>
  );
}
