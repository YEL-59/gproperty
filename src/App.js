import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Project from './pages/project/Project';
import Contact from './pages/contact/Contact';
import Blog from "./pages/blog/Blog";
import Career from './pages/career/Career';
import { Routes, Route, } from "react-router-dom";
import Footer from './components/footer/Footer';
import About from './pages/aboutus/About';
import ProjectD from './pages/projectdetails/ProjectD';
import React,{useState} from 'react';


function App() {

  const [loading, setLoading]=useState(true);
  const spinner=document.getElementById("spinner");
  if(spinner){
    setTimeout(()=>{
      spinner.style.display="none";
      setLoading(false);

    },1000);
  }


  return (
    !loading && (
      <>
        <Navbar />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projectdetails" element={<ProjectD />} />
           
          </Routes>
       

        <Footer />
      </>
    )


    
  );
}

export default App;
