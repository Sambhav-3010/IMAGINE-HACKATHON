import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "@/Pages/Home"
import Console from "@/Pages/Console"

function App() {

  return (
    <>
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/console" element={<Console />} />
      </Routes>
    </Router>
    </div>
    </>
  )
}

export default App
