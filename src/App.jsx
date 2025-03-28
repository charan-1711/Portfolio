import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Projects from './pages/projects';
import Contact from './pages/Contact';
import About from './pages/About';
import Skills from './pages/Skills';
import Footer from './components/Footer';

function App() {
  return(
    <div>
    <Router basename='/charan-portfolio'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
    <Footer />
    </div>
  )
}

export default App
