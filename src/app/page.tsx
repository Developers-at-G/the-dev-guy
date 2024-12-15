'use client';
import Career from "./Career/Career";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Navigation from "./Navigation/Navigation";
import Profile from "./Profile/Profile";
import Skills from "./Skills/Skills";

export default function Home() {
  return (
    <div className="bg-white">
      <Navigation/>
      <Profile/>
      <Skills/>
      <Career/>
      <Education/>
      <Contact/>
    </div>
  );
}
