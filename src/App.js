import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Project from './pages/project/Project';
import Contact from './pages/contact/Contact';
import Blog from "./pages/blog/Blog";
import Career from './pages/career/Career';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import About from './pages/aboutus/About';



function App() {
	return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
