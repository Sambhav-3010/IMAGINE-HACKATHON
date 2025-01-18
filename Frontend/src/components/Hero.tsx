import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import "./hero.css";
import "./AnimateLogo.css";
import AnimatedLogo from "./AnimatedLogo";

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const words = ["Open Source User Authentication", "Build fast. Maintain control. Reduce Costs"];

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
            setTimeout(remove, 200);
          }
        }, 75); // Typing speed
      }
    };

    const remove = () => {
      if (textRef.current) {
        intervalId = setInterval(() => {
          if (currentCharIndex > 0) {
            if (textRef.current) {
              textRef.current.textContent = textRef.current.textContent?.slice(0, -1) || "";
            }
            currentCharIndex--;
          } else {
            clearInterval(intervalId!);
            intervalId = null;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            setTimeout(type, 200);
          }
        }, 75); // Removing speed
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
    <div className="flex flex-col items-center gap-20 justify-center min-h-screen text-white">
      <div className="hero flex flex-col items-center justify-center rounded-lg bg-white/5 backdrop-blur-lg p-6 shadow-lg border border-white/30">
        <h1 className="hero1 flex flex-col items-center justify-center text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-bold text-center drop-shadow-lg backdrop-blur-lg p-6 border-white/10 rounded-xl">
          {/* Set a fixed height to prevent layout shifting */}
          <div
            ref={textRef}
            id="text"
            className="text-3xl mb-8 text-center drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
            style={{ minHeight: "3em", maxWidth: "18em"}} // Adjust this height to match your design
          ></div>
          <Button>Click me</Button>
        </h1>
      </div>
      <AnimatedLogo />
    </div>
  );
};

export default Hero;