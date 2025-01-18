import React from "react";
import Hero from "@/components/Hero";
import CardLayout from "@/components/CardLayout";
import Faq from "@/components/Faq";
import Roadmap from "@/components/Roadmap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Spline from "@/components/Spline";
import Chart from "@/components/Chart";

const Home = () => {
  return (
    <div className="">
      <div className="absolute inset-0 z-0">
        <Spline />
      </div>
      <div className="bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="relative z-10">
          <Navbar />
          <div id="home" className="pt-20 scroll-mt-20">
            <Hero />
          </div>
        </div>
        <div id="about" className="scroll-mt-20">
          <CardLayout />
        </div>
        <Chart />
        <div id="contact" className="scroll-mt-20">
          <Roadmap />
        </div>
        <div id="faq" className="scroll-mt-20">
          <Faq />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
