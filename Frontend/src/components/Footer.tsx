import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-6 bottom-0 left-0 right-0 shadow-lg">
      <div className="container mx-auto text-center flex flex-col items-center space-y-2">
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Contact Us
          </a>
        </div>
        <p className="text-sm">&copy; 2025 Logo. All rights reserved.</p>
        <p className="text-xs text-white">
          Built with <span className="">🦤</span> by Your Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
