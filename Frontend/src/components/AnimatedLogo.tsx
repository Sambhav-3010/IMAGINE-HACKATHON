import "./AnimateLogo.css";
import Bitcoin from "../assets/Bitcoin.png";
import Dogecoin from "../assets/Dogecoin.png";
import Ethereum from "../assets/Ethereum.png";
import Polygon from "../assets/Polygon.png";
import Solana from "../assets/Solana.png";

const AnimatedLogo = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative overflow-hidden h-16 w-96 text-white">
        <div className="flex items-center h-full animate-slide whitespace-nowrap">
          {/* Combined Logo List for Continuous Scroll */}
          <div className="flex gap-8 px-8">
            <img src={Bitcoin} alt="Bitcoin" className="h-10 px-8" />
            <img src={Dogecoin} alt="Dogecoin" className="h-10 px-8" />
            <img src={Ethereum} alt="Ethereum" className="h-10 px-8" />
            <img src={Polygon} alt="Polygon" className="h-10 px-8" />
            <img src={Solana} alt="Solana" className="h-10 px-8" />
          </div>
          <div className="flex gap-8 px-40">
            <img src={Bitcoin} alt="Bitcoin" className="h-10 px-8" />
            <img src={Dogecoin} alt="Dogecoin" className="h-10 px-8" />
            <img src={Ethereum} alt="Ethereum" className="h-10 px-8" />
            <img src={Polygon} alt="Polygon" className="h-10 px-8" />
            <img src={Solana} alt="Solana" className="h-10 px-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
