import Image from "next/image";
import React from "react";
const Profile = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-center p-8 md:p-28 gap-8 md:gap-48 coder-background w-full- h-full">
      <div className="w-full h-full flex justify-center rounded-2xl">
        <Image src="/Images/Picture.jpeg" alt="profile" width={350} height={350} 
        className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-2xl"
        />
      </div>
      <div className="code-block flex flex-col w-full h-full text-center md:text-left">
        <p className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-white code-text typewriter">
          Hello World
        </p>
        <p className="text-base md:text-base text-white typewriter">
          My name is <span className="highlight">Abdalah Amadou Gueye</span> I am from 
          <span className="highlight"> Senegal</span>, I am a Master in
          Applied Computer Science, specialized in <span className="highlight">UI / UX Design</span> and
          <span className="highlight"> Usability Engineering</span>. I have been working as a Software Engineer
          for many years using, <span className="highlight">React JS</span> and <span className="highlight">Next Js</span>, with a focus on modern
          UI/UX design principles.
        </p>
      </div>
    </section>
  );
};

export default Profile;
