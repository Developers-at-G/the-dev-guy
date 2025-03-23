import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <section className=" w-full" id="about">
      <div className="flex flex-col md:flex-row items-center justify-center p-8 md:p-28 gap-8 md:gap-48">
        <div className="w-full h-full flex justify-center rounded-2xl transform transition-all duration-600 hover:scale-105">
          <Image 
            src="/Images/Picture.jpeg" 
            alt="profile" 
            width={350} 
            height={350} 
            className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-2xl"
          />
        </div>
        <div className="code-block flex flex-col w-full h-full text-center md:text-left">
          <p className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-white code-text typewriter">
            Hello World
          </p>
          <p className="text-base md:text-base text-white typewriter mb-6">
            My name is <span className="highlight">Abdalah Amadou Gueye</span> I am from 
            <span className="highlight"> Senegal</span>, I am a Master in
            Applied Computer Science, specialized in <span className="highlight">UI / UX Design</span> and
            <span className="highlight"> Usability Engineering</span>. I have been working as a Software Engineer
            for many years using, <span className="highlight">React JS</span> and <span className="highlight">Next Js</span>, with a focus on modern
            UI/UX design principles.
          </p>
        </div>
      </div>

      <div className="px-8 md:px-28 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50 shadow-lg hover:bg-gray-800/40 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              About This Website
            </h2>
            <p className="text-base text-white/90 leading-relaxed">
              This website was created using <span className="highlight">Next.js</span> with React. 
              Next.js is a framework created by Vercel that renders data on the server side rather than in the browser. 
              While I have built several web pages using <span className="highlight">React</span> before, 
              I find Next.js to be particularly impressive. 
            </p>
            <p className="text-base text-white/90 leading-relaxed mt-4">
              This website is hosted on <span className="highlight">Vercel</span> - a new experience for me.
              I chose Vercel specifically to explore its capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
