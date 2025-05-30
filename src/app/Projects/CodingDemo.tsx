import React, { useState, useRef } from 'react';
import styles from './CodingDemo.module.css';

const CodingDemo = () => {
  const [currentVideo, setCurrentVideo] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    if (currentVideo === 1) {
      setCurrentVideo(2);
      if (videoRef.current) {
        videoRef.current.src = "/Images/code.mov";
        videoRef.current.play();
      }
    } else {
      setCurrentVideo(1);
      if (videoRef.current) {
        videoRef.current.src = "/Images/terminal.mov";
        videoRef.current.play();
      }
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-20" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Before we dive into my work, here&apos;s a quick glimpse of how I bring ideas to life
          </p>
        </div>

        <div className="relative group">
          {/* Video Container with Glowing Border Effect */}
          <div className="relative rounded-xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
            {/* Glowing Border Animation */}
            <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 ${styles['animate-gradient-x']} rounded-xl`}></div>
            
            {/* Video Player */}
            <div className="relative aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full object-cover rounded-xl"
                loop={false}
                muted
                playsInline
                autoPlay
                preload="auto"
                poster="/Images/code.png"
                onEnded={handleVideoEnd}
              >
                <source src="/Images/code.mov" type="video/quicktime" />
                <source src="/Images/code.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
            >
              Explore My Projects
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform group-hover:translate-y-1 transition-transform duration-300" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingDemo; 