'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@headlessui/react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0,
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'career', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleBlogClick = () => {
    window.location.href = '/blog';
  };

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/20">
              <Image 
                src="/Images/Picture.jpeg" 
                alt="Abdallah Gueye" 
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-semibold text-foreground hidden sm:block">
              Abdallah Gueye
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                as="a"
                href={`#${item.id}`}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${activeLink === item.id 
                    ? 'bg-primary text-primary-foreground shadow-lg' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }
                `}
                onClick={() => handleLinkClick(item.id)}
              >
                {item.label}
              </Button>
            ))}
            <Button
              onClick={handleBlogClick}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              Blog
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Menu as="div" className="relative">
              <Menu.Button as={Fragment}>
                {({ open }) => (
                  <Button
                    className={`
                      p-2 rounded-lg transition-all duration-200
                      ${open 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-foreground hover:bg-muted'
                      }
                    `}
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      {open ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      )}
                    </svg>
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
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-background border border-border shadow-lg focus:outline-none">
                  <div className="px-1 py-1">
                    {navigationItems.map((item) => (
                      <Menu.Item key={item.id}>
                        {({ active }) => (
                          <Button
                            as="a"
                            href={`#${item.id}`}
                            className={`
                              group flex w-full items-center px-4 py-3 text-sm rounded-lg
                              transition-all duration-200
                              ${activeLink === item.id 
                                ? 'bg-primary text-primary-foreground' 
                                : active 
                                  ? 'bg-muted text-foreground' 
                                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                              }
                            `}
                            onClick={() => handleLinkClick(item.id)}
                          >
                            {item.label}
                          </Button>
                        )}
                      </Menu.Item>
                    ))}
                    <Menu.Item>
                      {({ active }) => (
                        <Button
                          className={`
                            group flex w-full items-center px-4 py-3 text-sm rounded-lg
                            transition-all duration-200
                            ${active 
                              ? 'bg-muted text-foreground' 
                              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                            }
                          `}
                          onClick={handleBlogClick}
                        >
                          Blog
                        </Button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
