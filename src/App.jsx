import { lazy, Suspense } from "react";
import { Routes, Route} from "react-router-dom";
import { Navbar } from "./components/Navbar";

import LandingPage from "./page/LandingPage";
import Aboutme from "./sections/Aboutme";
import Projects from "./sections/Projects";




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
    </>
  );
}

export default App;