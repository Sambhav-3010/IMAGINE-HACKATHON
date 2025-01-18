import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import CardLayout from '@/components/CardLayout'
import Faq from '@/components/Faq'


function App() {

  return (
    <>
    <div>
      <Navbar />
      <Hero />
      <CardLayout />
      <Faq />
      <Footer />
    </div>
    </>
  )
}

export default App
