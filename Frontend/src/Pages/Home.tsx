import React from "react";
import Hero from "@/components/Hero";
import CardLayout from "@/components/CardLayout";
import Faq from "@/components/Faq.tsx";
import Roadmap from "@/components/Roadmap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Spline from "@/components/Spline";

const Home = () => {
  return (
    <div className="">
      <div className="absolute inset-0 z-0">
        <Spline />
      </div>
      <div className="bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="relative z-10">
          <Navbar />
          <div className="pt-20">
            <Hero />
          </div>
        </div>
        <CardLayout />
        <Roadmap />
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
