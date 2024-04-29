import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />

    </>
  )
}

export default App
