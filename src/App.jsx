import { lazy, Suspense } from "react";
import { Routes, Route} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import LandingPage from "./page/LandingPage";
const Aboutme = lazy(() => import("./sections/Aboutme"));
const Projects = lazy(() => import("./sections/Projects"));




function App() {
  return (
    <>
    
      <Navbar/>
      
      
      <Suspense fallback={<div className="text-white mt-20">Loading...</div>}>
        
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<Aboutme />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        
      </Suspense>
      <Footer/>
    </>
  );
}

export default App;