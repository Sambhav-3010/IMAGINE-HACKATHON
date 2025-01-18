import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CardLayout from "@/components/CardLayout";
import Faq from "@/components/Faq";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-gradient-to-br from-black via-gray-800 to-black">
        <Navbar />
        <Hero />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
