import { useState } from 'react'

import styles from "./global.module.css";

import './App.css'
// import Navigation from './conmponents/Navigation'
// import Footer from './conmponents/Footer'
// import ContactUs from './pages/old'

import Navigation from './pages/components/Navigation';
import Footer from './pages/components/Footer';
import Projects from './pages/Projects';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <div 
      className={styles.contactUs}
      >
          <Navigation/>
          <Routes>
          <Route  path="/" element={<About />} />
          <Route  path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactUs />} />

          </Routes>
        {/* <Content/> */}
        {/* <About/>
        <Projects/> */}
        
      <Footer />
        </div>
    </>
  )
}

export default App
