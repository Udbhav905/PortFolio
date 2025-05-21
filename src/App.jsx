import React, { useState ,useEffect } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Experience from './Components/Experience'
import Projects from './Components/Project'
import Certificates from './Components/Certificate'
import Contact from './Components/Contact'
import Preloader from './Components/Preloader'

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    window.addEventListener("load", () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); 
    });

   
    return () => window.removeEventListener("load", () => {});
  }, []);
  

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
  <>{isLoading ? <Preloader /> : <Home />}
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certificates">
        <Certificates />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
     </> 
  );
  
};



export default App