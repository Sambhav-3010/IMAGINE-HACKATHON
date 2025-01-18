import React from "react";
import { Button } from "@/components/ui/button";
import "./hero.css";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-black via-gray-800 to-black text-white">
      <div className="flex flex-col items-center justify-center rounded-lg text-white bg-white/10 backdrop-blur-md shadow-lg">
        <div className="hero flex flex-col items-center justify-center rounded-lg bg-white/1 backdrop-blur-md p-6 shadow-md">
          <h1 className="hero1 text-4xl font-bold mb-4 text-center drop-shadow-lg">
            Open Source User Authentication
            <p className="text-lg mb-8 text-center drop-shadow-lg"></p>
            <Button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600">
              Click me
            </Button>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
