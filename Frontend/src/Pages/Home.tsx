import React from 'react'
import Hero from "@/components/Hero"
import CardLayout from '@/components/CardLayout'
import Faq from '@/components/Faq.tsx'
import Roadmap from "@/components/Roadmap"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const Home = () => {
  return (
    <div className='bg-gradient-to-br from-black via-gray-800 to-black'>
      <Navbar />
      <Hero />
      <CardLayout />
      <Roadmap />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home
