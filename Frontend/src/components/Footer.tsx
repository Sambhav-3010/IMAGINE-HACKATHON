import React from 'react';

const Footer = () => {
  return (
    <footer className="border-2 text-black py-6 bottom-0 left-0 right-0 shadow-lg bg-white">
      <div className="container mx-auto text-center flex flex-col items-center space-y-2">
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-black hover:text-gray-200 transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-200 transition duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-200 transition duration-300"
          >
            Contact Us
          </a>
        </div>
        <p className="text-sm">&copy; 2025 Logo. All rights reserved.</p>
        <p className="text-xs text-black">
          Built with <span className="">🦤</span> by Your Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
