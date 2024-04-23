import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar />
      <Home />
      <About />


    </>
  )
}

export default App
