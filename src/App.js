import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Project from './pages/project/Project';


import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';



function App() {
	return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
