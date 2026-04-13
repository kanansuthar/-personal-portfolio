import {Routes, Route } from "react-router-dom";
import { useEffect} from "react";
import Navbar from "./components/Navbar";
import TodoApp from "./pages/Todoapp";
import Hero from "./components/Hero";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Footer from "./components/Footer";

import './index.css';
import './App.css';
function App() {
  useEffect(() => {
    const reveals=document.querySelectorAll(".reveal");
    const observer=new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });
    
    reveals.forEach(reveal => {
      observer.observe(reveal);
  }, []);
  });
  return (
    <>
    
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo" element={<TodoApp/>}/>
      </Routes>
      <Footer />
    
          </>
  )
}

export default App
