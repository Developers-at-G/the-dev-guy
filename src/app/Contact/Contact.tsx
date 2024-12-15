import React from 'react';

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md p-6 bg-gray-800 border border-gray-200 rounded-lg text-white">
        <h2 className="text-center text-2xl font-semibold mb-6">Contact</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full p-2 bg-white text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full p-2 bg-white text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 text-sm font-medium">
            Message:
          </label>
          <textarea
            id="message"
            rows= {4}
            placeholder="Your Message"
            className="w-full p-2 bg-white text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
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
      </div>
    </div>
  );
};

export default Contact;
