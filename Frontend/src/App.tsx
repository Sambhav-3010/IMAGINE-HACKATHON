import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CardLayout from "@/components/CardLayout";
import Faq from "@/components/Faq";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "@/Pages/Home"
import Console from "@/Pages/Console"

function App() {
  return (
    <>
    <div className="bg-gradient-to-br from-black via-gray-800 to-black">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/console" element={<Console />} />
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
