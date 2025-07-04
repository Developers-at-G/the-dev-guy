'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@headlessui/react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (id: string) => {
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

  const navigationItems = [
    { id: 'about', label: 'About me' },
    { id: 'skills', label: 'Skills' },
    { id: 'career', label: 'Career' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievement', label: 'Achievement' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="py-5 text-black text-3xl fixed top-0 z-50 w-full">
      <div className="flex justify-center w-full items-center px-4 md:px-8">
        <div className="relative w-full md:w-auto px-4 md:px-0">
          {/* Mobile Menu Button */}
          <div className="md:hidden absolute left-4 top-2 z-10">
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button as={Fragment}>
                {({ open }) => (
                  <Button
                    className={`
                      flex items-center justify-center w-10 h-10 
                      bg-white rounded-full shadow-lg text-gray-800 
                      hover:bg-gray-100 transition-all duration-200
                      ${open ? 'ring-2 ring-emerald-400 ring-opacity-50' : ''}
                    `}
                  >
                    ☰
                  </Button>
                )}
              </Menu.Button>
              
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left coder-background backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-400/20 focus:outline-none">
                  <div className="px-1 py-1">
                    {navigationItems.map((item) => (
                      <Menu.Item key={item.id}>
                        {({ active }) => (
                          <Button
                            as="a"
                            href={`#${item.id}`}
                            className={`
                              group flex w-full items-center px-4 py-3 text-lg rounded-xl
                              transition-all duration-200 cursor-pointer
                              ${activeLink === item.id 
                                ? 'bg-white text-gray-800 shadow-lg' 
                                : active 
                                  ? 'bg-white/10 text-white' 
                                  : 'text-white hover:bg-white/5'
                              }
                            `}
                            onClick={() => handleLinkClick(item.id)}
                          >
                            {item.label}
                          </Button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex justify-center items-center gap-4 text-white coder-background backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-emerald-400/20">
            <li>
              <Image 
                src="/Images/Picture.jpeg" 
                alt="profile" 
                width={40} 
                height={40} 
                className="rounded-full object-cover ring-2 ring-emerald-400/30"
              />
            </li>
            {navigationItems.map((link) => (
              <li key={link.id}>
                <Button
                  as="a"
                  href={`#${link.id}`}
                  className={`
                    text-xl p-3 rounded-2xl cursor-pointer transition-all duration-200
                    ${activeLink === link.id 
                      ? 'bg-white text-gray-800 shadow-lg ring-2 ring-emerald-400/50' 
                      : 'text-white hover:bg-white/10 hover:text-white data-hover:bg-white/10 data-hover:text-white'
                    }
                  `}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
