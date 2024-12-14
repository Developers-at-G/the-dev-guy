'use client';
import Career from "./Career/Career";
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
    </div>
  );
}
