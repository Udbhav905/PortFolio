import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Experience from './Components/Experience'
import Projects from './Components/Project'
import Certificates from './Components/Certificate'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Certificates/>
      <Contact />
    </div>
  )
}

export default App