import React from "react";
import { Button } from "@/components/ui/button";
import "./hero.css";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-black via-gray-800 to-black text-white">
      <div className="hero flex flex-col items-center justify-center rounded-lg bg-white/5 backdrop-blur-lg p-6 shadow-lg border border-white/30">
      <h1 className="hero1 flex flex-col items-center justify-center text-4xl bg-white/10 font-bold mb-4 text-center drop-shadow-lg backdrop-blur-lg p-6 border-white/10 rounded-xl">
        Open Source User Authentication
        <p className="text-lg mb-8 text-center drop-shadow-lg">
        Build fast. Maintain control. Reduce costs.
        </p>
        <Button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600">
        Click me
        </Button>
      </h1>
      </div>
    </div>
  );
};

export default Hero;