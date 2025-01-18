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
    <div>
      {/* Navbar and Hero with Spline Background */}
      <div className="relative">
        {/* Spline Background */}
        <Spline />
        {/* Content */}
        <div className="z-10">
          <Navbar />
          <Hero />
        </div>
      </div>

      {/* Other Sections */}
    <div className='bg-gradient-to-br from-black via-gray-800 to-black'>
      <Navbar />
      <Hero />
      <CardLayout />
      <Roadmap />
      <Faq />
      <Footer />
    </div>
    </div>
  );
};

export default Home;
