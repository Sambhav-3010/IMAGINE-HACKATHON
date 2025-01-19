import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import "./hero.css";
import "./AnimateLogo.css";
import AnimatedLogo from "./AnimatedLogo";

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const words = [
    "End to End solution for Web3 deployment in just few clicks",
    "",
  ];

  useEffect(() => {
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let intervalId: NodeJS.Timeout | null = null;

    const type = () => {
      if (textRef.current) {
        intervalId = setInterval(() => {
          if (currentCharIndex < words[currentWordIndex].length) {
            if (textRef.current) {
              textRef.current.textContent +=
                words[currentWordIndex][currentCharIndex];
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
        <h1 className="pt-8 text-7xl text-white font-bold text-center drop-shadow-lg">scDev.ai</h1>
        <p className="hero1 flex flex-col items-center justify-center text-4xl text-white font-bold text-center drop-shadow-lg py-4 px-6">
          <div
            ref={textRef}
            id="text"
            className="text-2xl text-center drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-blue-500 to-purple-600"
            style={{ minHeight: "5em", maxWidth: "18em", padding: "0.5em" }}
          ></div>
          <Button className=" bg-gradient-to-r from-green-400 to-blue-600 hover:from-green-500 hover:to-blue-700 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Try Now
          </Button>
        </p>
      </div>
      <AnimatedLogo />
    </div>
  );
};

export default Hero;
