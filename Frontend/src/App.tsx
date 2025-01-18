import Hero from "@/components/Hero"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"


function App() {
  return (
    <>
    <div>
      <Hero />
      <Navbar />
    </div>
    </>
  )
}

export default App
