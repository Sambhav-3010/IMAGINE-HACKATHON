import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 text-white shadow-lg py-4 px-10 z-50 rounded-lg w-[80%] max-w-[1200px] bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg ">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="font-bold text-xl">Logo</a>
        </div>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-gray-700">About</a></li>
          <li><a href="#contact" className="hover:text-gray-700">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
