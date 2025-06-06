'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showPopup, setShowPopup] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle changes in the form fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Transform formData to match EmailJS template variables
    const templateParams = {
      to_name: "Gueye", // You can set this to whoever should receive the email
      from_name: formData.name,
      from_email: formData.email, // Adding email although not in template
      message: formData.message
    };

    emailjs
      .send(
        'service_vvv8o9i',
        'template_l8eu7hv',
        templateParams,  // Using templateParams instead of formData
        'QQ-rJh57rVKmd77EL'
      )
      .then(
        () => {
          setIsSuccess(true);
          setShowPopup(true);
          setFormData({ name: '', email: '', message: '' }); // Reset form
        },
        (error) => {
          setIsSuccess(false);
          setShowPopup(true);
          console.error(error);
        }
      );
  };

  return (
    <section className="flex flex-col py-10 min-h-screen relative" id="contact">
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`bg-white p-6 rounded-lg shadow-xl ${isSuccess ? 'border-green-500' : 'border-red-500'} border-2`}>
            <div className="text-center">
              {isSuccess ? (
                <>
                  <div className="text-green-500 text-xl font-bold mb-2">Success!</div>
                  <p className="text-gray-700">Your message has been sent successfully.</p>
                </>
              ) : (
                <>
                  <div className="text-red-500 text-xl font-bold mb-2">Error</div>
                  <p className="text-gray-700">Failed to send message. Please try again.</p>
                </>
              )}
              <button
                onClick={() => setShowPopup(false)}
                className="mt-4 px-4 py-2 coder-background text-white rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="text-center text-white text-6xl font-semibold my-6">Contact</div>
      
      <div className="flex justify-center items-start px-4">
        {/* Social Links - Fixed on the left */}
        <div className="fixed left-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-8 text-white z-10">
          <a 
            href="https://www.linkedin.com/in/abdalah-amadou-gueye/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link group"
          >
            <div className="flex items-center">
              <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-all duration-300">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <span className="opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-2 transition-all duration-300 whitespace-nowrap text-lg">LinkedIn</span>
            </div>
          </a>
          
          <a 
            href="https://github.com/abdallah96" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link group"
          >
            <div className="flex items-center">
              <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-all duration-300">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <span className="opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-2 transition-all duration-300 whitespace-nowrap text-lg">GitHub</span>
            </div>
          </a>

          {/* <a 
            href="https://twitter.com/AbdallahGueye96" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link group"
          >
            <div className="flex items-center">
              <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-all duration-300">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>
              <span className="opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-2 transition-all duration-300 whitespace-nowrap text-lg">Twitter</span>
            </div>
          </a> */}

          <a 
            href="https://www.instagram.com/aamadou_g/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link group"
          >
            <div className="flex items-center">
              <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-all duration-300">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <span className="opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-2 transition-all duration-300 whitespace-nowrap text-lg">Instagram</span>
            </div>
          </a>
        </div>

        {/* Centered Form */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="coder-background border border-gray-200 rounded-lg text-white p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-lg font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  placeholder="Your Name"
                  className="w-full p-3 bg-white text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 text-lg"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-lg font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  placeholder="Your Email"
                  className="w-full p-3 bg-white text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 text-lg"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-lg font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  placeholder="Your Message"
                  className="w-full p-3 bg-white text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 text-lg"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 text-lg font-medium"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
