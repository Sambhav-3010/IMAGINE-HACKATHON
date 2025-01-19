import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import "./hero.css";
import "./AnimateLogo.css";
import AnimatedLogo from "./AnimatedLogo";

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const words = ["Open Source User Authentication"];

  useEffect(() => {
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let intervalId: NodeJS.Timeout | null = null;

    const type = () => {
      if (textRef.current) {
        intervalId = setInterval(() => {
          if (currentCharIndex < words[currentWordIndex].length) {
            if (textRef.current) {
              textRef.current.textContent += words[currentWordIndex][currentCharIndex];
            }
            currentCharIndex++;
          } else {
            clearInterval(intervalId!);
            intervalId = null;
          }
        }, 75); // Typing speed
      }
    };

    type();

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-20 justify-center min-h-screen text-white ">
      <div className="hero flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-lg p-8 shadow-2xl border border-white/20">
        <h1 className="hero1 flex flex-col items-center justify-center text-6xl bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-blue-500 to-purple-600 font-bold text-center drop-shadow-lg p-6">
          <div
            ref={textRef}
            id="text"
            className="text-5xl mb-8 text-center drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-blue-500 to-purple-600"
            style={{ minHeight: "4em", maxWidth: "18em", padding: "0.5em" }}
          ></div>
          <Button className="mt-4 bg-gradient-to-r from-green-400 to-blue-600 hover:from-green-500 hover:to-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Click me
          </Button>
        </h1>
      </div>
      <AnimatedLogo />
    </div>
  );
};

export default Hero;
