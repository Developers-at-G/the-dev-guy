import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (id:any) => {
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
    <nav className="py-5 text-black text-3xl sticky top-0 z-50">
      <div className="flex justify-center w-full items-center">
        <div className="w-fit-content">
          <ul className="flex flex-row justify-center items-center gap-4 text-white w-fit-content bg-gray-800 opacity-90 p-5 rounded-2xl">
            {[
              { id: 'about', label: 'About me' },
              { id: 'skills', label: 'Skills' },
              { id: 'career', label: 'Career' },
              { id: 'education', label: 'Education' },
              { id: 'contact', label: 'Contact' },
            ].map((link) => (
              <li
                key={link.id}
                className={`text-xl p-2 rounded-2xl cursor-pointer ${
                  activeLink === link.id ? 'bg-white text-gray-800' : 'hover:text-gray-800 hover:bg-white'
                }`}
                onClick={() => handleLinkClick(link.id)}
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
