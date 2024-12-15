import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        'service_vvv8o9i', // Replace with your EmailJS service ID
        'template_l8eu7hv', // Replace with your EmailJS template ID
        formData,
        'QQ-rJh57rVKmd77EL' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert('Email sent successfully!');
        },
        (error) => {
          alert('Failed to send email.');
          console.error(error);
        }
      );
  };

  return (
    <section className="flex flex-col  py-10 items-center min-h-screen bg-gray-800" id='contact'>
        <div className="text-center text-6xl font-semibold my-6">Contact</div>
      <div className="w-9/12 p-6 bg-gray-800 border border-gray-200 rounded-lg text-white">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-2 bg-white text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-2 bg-white text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Your Message"
              className="w-full p-2 bg-white text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex justify-start">
            <button
              type="submit"
              className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
