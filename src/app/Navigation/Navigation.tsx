import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (id:string) => {
    setActiveLink(id);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) setActiveLink(id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="py-5 text-black text-3xl fixed top-0 z-50 w-full">
      <div className="flex justify-center w-full items-center px-4 md:px-8">
        <div className="relative w-full md:w-auto px-4 md:px-0">
          <button 
            className="md:hidden flex items-center justify-center w-10 h-10 
              bg-white rounded-full shadow-lg text-gray-800 
              absolute left-4 top-2 z-10 hover:bg-gray-100 
              transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          <ul className={`
            flex justify-center items-center gap-4 text-white 
            coder-background backdrop-blur-sm p-5 rounded-2xl shadow-lg
            md:flex-row md:relative md:w-auto md:mt-0
            flex-col absolute w-[90vw] left-1/2 -translate-x-1/2 mt-14
            md:!flex ${isMenuOpen ? 'flex' : 'hidden'}
          `}>
            <li className="hidden md:block">
              <Image 
                src="/Images/Picture.jpeg" 
                alt="profile" 
                width={40} 
                height={40} 
                className="rounded-full object-cover"
              />
            </li>
            {[
              { id: 'about', label: 'About me' },
              { id: 'skills', label: 'Skills' },
              { id: 'career', label: 'Career' },
              { id: 'achievement', label: 'Achievement' },
              { id: 'education', label: 'Education' },
              { id: 'contact', label: 'Contact' },
            ].map((link) => (
              <li
                key={link.id}
                className={`text-xl p-2 rounded-2xl cursor-pointer ${
                  activeLink === link.id ? 'bg-white text-gray-800' : 'hover:text-gray-800 hover:bg-white'
                }`}
                onClick={() => {
                  handleLinkClick(link.id);
                  setIsMenuOpen(false);
                }}
              >
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
