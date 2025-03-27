import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Resume from './pages/Resume';
import Projects from './pages/projects';
import Contact from './pages/Contact';
import About from './pages/About';
import Skills from './pages/Skills';

function App() {
  return(
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
