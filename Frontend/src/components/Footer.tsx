import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-white p-8 bottom-0 shadow-lg border-t border-gray-400 bg-black">
      <div className="container text-center flex flex-col items-center space-y-2">
      <p className="text-sm">&copy; 2025 Logo. All rights reserved.</p>
      <p className="text-xs text-white">
        Built with <span className="">🦤</span> by Your Team
      </p>
      </div>
    </footer>
  );
};

export default Footer;
