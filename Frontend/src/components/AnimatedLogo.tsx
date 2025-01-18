import React from "react";
import "./AnimateLogo.css";
import "../assets/Bitcoin.png";
import "../assets/Dogecoin.png";
import "../assets/Ethereum.png";
import "../assets/Polygon.png";
import "../assets/Solana.png";

const AnimatedLogo = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative overflow-hidden h-16 w-96 text-white">
        <div className="flex items-center h-full animate-slide whitespace-nowrap">
          {/* Original Logo List */}
          <div className="flex gap-8 px-8">
            <img src="/Bitcoin.png" alt="Bitcoin" className="h-10" />
            <img src="/Dogecoin.png" alt="Dogecoin" className="h-10" />
            <img src="/Ethereum.png" alt="Ethereum" className="h-10" />
            <img src="/Polygon.png" alt="Polycoin" className="h-10" />
            <img src="/Solana.png" alt="Solana" className="h-10" />
          </div>
          <div className="flex gap-8 px-8">
            <img src="/Bitcoin.png" alt="Bitcoin" className="h-10" />
            <img src="/Dogecoin.png" alt="Dogecoin" className="h-10" />
            <img src="/Ethereum.png" alt="Ethereum" className="h-10" />
            <img src="/Polygon.png" alt="Polycoin" className="h-10" />
            <img src="/Solana.png" alt="Solana" className="h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
