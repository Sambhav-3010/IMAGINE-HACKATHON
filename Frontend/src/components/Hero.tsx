import React from "react";
import { Button } from "@/components/ui/button";
import "./hero.css";
import "./AnimateLogo.css";
import AnimatedLogo from "./AnimatedLogo";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-20 justify-center min-h-screen text-white">
      <div className="hero flex flex-col items-center justify-center rounded-lg bg-white/5 backdrop-blur-lg p-6 shadow-lg border border-white/30">
        <h1 className="hero1 flex flex-col items-center justify-center text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-bold mb-4 text-center drop-shadow-lg backdrop-blur-lg p-6 border-white/10 rounded-xl">
          Open Source User Authentication
          <p className="text-lg mb-8 text-center drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            Build fast. Maintain control. Reduce costs.
          </p>
          <Button >
            Click me
          </Button>
        </h1>
      </div>
      <AnimatedLogo />
    </div>
  );
};

export default Hero;
